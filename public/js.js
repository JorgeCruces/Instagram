document.addEventListener('DOMContentLoaded', event =>{

});

function updatePost(e){
    const db = firebase.firestore();
    const myPost = db.collection('Logins').doc('ella');
    myPost.update({nombre: e.target.value});
}

function updatePass(e){
    const db = firebase.firestore();
    const myPost = db.collection('Logins').doc('ella');
    myPost.update({contra: e.target.value});
}