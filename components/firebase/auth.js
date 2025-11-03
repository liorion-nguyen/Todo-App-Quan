import { v4 as uuidv4 } from 'https://cdn.jsdelivr.net/npm/uuid@11.0.2/+esm';
import { signInWithPopup } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { addDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
import { auth, db, providerGG } from "../../config/firebase.js";

export const signInWidthGoogle = async () => {
    const result = await signInWithPopup(auth, providerGG);
    if (!result.user.email) {
        alert('Please login with email and password');
        return;
    }
    const email = result.user.email;
    const users = await getDocs(collection(db, 'users'));
    const usersData = users.docs.map(doc => doc.data());
    const user = usersData.find(item => item.email === email);
    if (!user) {
        await registerUser({
            email: email,
            name: result.user.displayName,
            password: "123456",
        })
    }
    alert('Sign in successfully');
}

export const registerUser = async (userData) => {
    let user = {
        ...userData,
        id: uuidv4(),
        status: 'active',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    }
    await addDoc(collection(db, 'users'), user);
    alert('Register successfully');
}

export const signIn = async (email, password) => {
    const users = await getDocs(collection(db, 'users'));
    const usersData = users.docs.map(doc => doc.data());
    const user = usersData.find(item => item.email === email && item.password === password);
    return user;
}