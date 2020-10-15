import firebase from 'firebase'

export const loginDB = function (user) {
    return new Promise((resolve, reject) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(user.email, user.password)
            .then(response => {
                resolve(response.user)
            })
            .catch(error => {
                console.log('en loginDB', error);
                reject(error)
            });
    })
}

export const getCurrentUser = function () {
    return firebase.auth().currentUser
}

export const registerDB = function (user) {
    return new Promise((resolve, reject) => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(user.email, user.password)
            .then(response => {
                resolve(response.user)
            })
            .catch(error => {
                console.log('en registerDB', error);
                reject(error)
            });
    })
}

export const logoutDB = async function () {
    let logOutExitoso = false;
    await firebase
        .auth()
        .signOut()
        .then(() => {
            logOutExitoso = true
            console.log('logout exitoso de db')
        })
        .catch(error => {
            console.log(error);
        });
    return logOutExitoso
}

