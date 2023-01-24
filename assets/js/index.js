import { User } from './classes/User.js';
import { Book } from './classes/Book.js';
import { UserManager } from './classes/UserManager.js';
import { BookManager } from './classes/BookManager.js';

window.addEventListener("DOMContentLoaded", function() {
    
    let tableauBook = [];
    let tableauUser = [];
    
    let book1 = new Book("book1", "Le Book1", "Victor Bookin", 2018, 400, "C'est l'histoire de la vie de Victor Bookin", "https://www.buzzwebzine.fr/wp-content/uploads/2021/04/pieces-jeu-echecs-1024x576.jpg");
    let book2 = new Book("book2", "Le Book2", "David Bookde", 2020, 3, "C'est l'histoire de David qui joue au ping-pong", "https://media.istockphoto.com/id/502189498/fr/photo/balle-et-batte-de-tennis-de-table.jpg?s=612x612&w=0&k=20&c=ixhR2ZOZq2qX3ObflOLbkatMTNxlEzMVIWhuDC4doMY=");
    let book3 = new Book("book3", "Le Book3", "Sébastien Booktroi", 2012, 69, "C'est l'histoire de Seb qui vend des ustensiles de cuisine","https://www.maisonae.fr/wp-content/uploads/SEB.jpg");
    
    let user1 = new User("user1", "Vicous", "victor@mail.fr", "Victor-1234", "Victor", "McBernik", "https://cdn.tv-programme.com/pic/episodes/37/377112.jpg");
    let user2 = new User("user2", "Dendey", "david@mail.fr", "David-1234", "David", "Copperfield", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/DC_Bullett_Photo.jpg/800px-DC_Bullett_Photo.jpg");
    let user3 = new User("user3", "Barry", "seb@mail.fr", "Seb-1234", "Sébastien", "Loeb","https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2020/2/18/toty1tiycgj7hunu2w6e/sebastien-loeb-portrait-wrc-2020");

    tableauBook.push(book1, book2, book3);
    tableauUser.push(user1, user2, user3);
    
    // console.log(tableauBook);
    // console.log(tableauUser);
 
/////////////////// Du JS au JSON 
    let jsonTableauBook = JSON.stringify(tableauBook);
    let jsonTableauUser = JSON.stringify(tableauUser);
    
    sessionStorage.setItem("books", jsonTableauBook);
    sessionStorage.setItem("user", jsonTableauUser);
    
    let otherBook = JSON.parse(jsonTableauBook);
    let otherUser = JSON.parse(jsonTableauUser);

/////////////////// Du JSON au JS
    let getOtherBook = JSON.parse(sessionStorage.getItem("books"));
    let getOtherUser = JSON.parse(sessionStorage.getItem("user"));
    
    // console.log(getOtherBook);
    // console.log(getOtherUser);
    
    let getOtherBookFinal = [];
    let getOtherUserFinal = [];
    
    for (let i = 0; i < getOtherBook.length; i++) {
        let bookFinal = JSON.parse(getOtherBook[i]);
        getOtherBookFinal.push(bookFinal);
    }
    
    for (let i = 0; i < getOtherUser.length; i++) {
        let userFinal = JSON.parse(getOtherUser[i]);
        getOtherUserFinal.push(userFinal);
    }
    
    // console.log(getOtherBookFinal);
    // console.log(getOtherUserFinal);
    
    for (let i = 0; i < getOtherBookFinal.length; i++) {
        let truc1 = new Book(getOtherBookFinal[i].id, getOtherBookFinal[i].title, getOtherBookFinal[i].author, getOtherBookFinal[i].publicationDate, getOtherBookFinal[i].totalPages, getOtherBookFinal[i].excerpt, getOtherBookFinal[i].coverImage);
        // console.log(truc1);
    }
    
    for (let i = 0; i < getOtherUserFinal.length; i++) {
        let truc2 = new User(getOtherUserFinal[i].id, getOtherUserFinal[i].username, getOtherUserFinal[i].email, getOtherUserFinal[i].password, getOtherUserFinal[i].firstName, getOtherUserFinal[i].lastName, getOtherUserFinal[i].profileImage);
        // console.log(truc2);
    }
    
    let newUserManager = new UserManager();
    newUserManager.load();
    let newUsername = document.getElementById("username").value;
    let newEmail = document.getElementById("email2").value;
    let newPassword = document.getElementById("password2").value;
    let newConfirmPassword = document.getElementById("confirmpassword").value;
    let newFirstname = document.getElementById("firstname").value;
    let newLastname = document.getElementById("lastname").value;
    let newURL = document.getElementById("urlprofilepic").value;
    let newUser = new User(newUsername, newEmail, newPassword, newConfirmPassword, newFirstname, newLastname, newURL);
    
    
    let userInformation = document.getElementById("user-information");
    userInformation.addEventListener("submit", function(event) {
        event.preventDefault();
        newUserManager.save();
        newUserManager.createUser(newUser);
    });
    
    
});