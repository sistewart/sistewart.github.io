"using strict"

class Book {
    constructor(img, title, author, genre, publiDate, rating){
        this._img = img;
        this._title = title;
        this._author = author;
        this._genre = genre;
        this._publiDate = publiDate;
        this._rating = rating;
    }
        getImg(){
            return this._img;
        }
        getTitle(){
            return this._title;
        }

        getAuthor(){
            return this._author;
        }

        getGenre(){
            return this._genre;
        }

        getPublicationDate(){
            return this._publiDate;
        }

        getRating(){
            return this._rating;
        }

        getBookDescription(){
            let sec = document.createElement("section");
            let imgElem = document.createElement("img");

            imgElem.src = this._img;
            let newBook = document.createElement("p");

            newBook.innerHTML = "<b>" + this._title +"</b>" + " by " + this._author + ", genre: "+ 
            this._genre + ", written in "+ this._publiDate+ ", rated "+ this._rating;
            sec.append(imgElem);
            sec.append(newBook);

            return sec;

        }
    }

bookcase = [];

bookcase.push(new Book("images/twilight.jpg","Twilight", "Stephanie Meyer", "Fiction", "2007", "4 stars"));
bookcase.push(new Book("images/little_women.jpg","Little Women", "Louisa May Alcott", "Historical Fiction","1869", "5 stars"));
bookcase.push(new Book("images/becoming.jpg","Becoming", "Michelle Obama", "Non-Fiction", "2018", "5 stars"));
bookcase.push(new Book("images/dancer.jpg","Dancer", "Lorri Hewett", "Realistic Fiction", "1999", "4 stars"));
bookcase.push(new Book("images/gone_wind.jpg","Gone with the Wind", "Margaret Mitchell", "Historical Fiction", "1936", "3 stars"));

console.log(bookcase);

let content = document.getElementById("books_info");
for(let a of bookcase){
    content.append(a.getBookDescription());
}