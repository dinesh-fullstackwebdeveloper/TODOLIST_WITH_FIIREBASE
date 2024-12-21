# TODO List with Firebase

## ✨ Overview
This is a CRUD (Create, Read, Update, Delete) application built using JavaScript and Firebase Realtime Database. The application allows users to manage a TODO list by adding, editing, and deleting records dynamically. The live application can be accessed [here](https://dinesh-todolist-with-firebase.netlify.app/).

## 🌟 Features
- 📝 **Add Users**: Insert new records with `Name`, `Age`, and `City`.
- 👀 **View Users**: Dynamically display the list of users in a table format.
- ✏️ **Edit Users**: Update existing records.
- ❌ **Delete Users**: Remove records from the database.
- 📱 **Responsive Design**: Adjusts seamlessly to various screen sizes.

## 🛠️ Technologies Used
- **HTML**: For structuring the webpage.
- **CSS**: For styling the application.
- **JavaScript**: For implementing functionality and Firebase integration.
- **Firebase Realtime Database**: To store and manage user data.
- **Netlify**: For hosting the application.

## ⚙️ Installation and Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/dinesh-fullstackwebdeveloper/TODO_LIST_WITH_FIREBASE.git
   ```
2. Navigate to the project directory:
   ```bash
   cd TODO_LIST_WITH_FIREBASE
   ```
3. Open the `index.html` file in your browser to view the application locally.

## 🔥 Firebase Setup
1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Create a new project.
3. Add a Realtime Database to your project and set the rules to public (for testing purposes only).
4. Copy your Firebase configuration and replace the `databaseURL` in the `appSetting` object in `js/script.js`:
   ```javascript
   const appSetting = {
       databaseURL: "https://your-database-name.firebaseio.com/"
   };
   ```

## 🚀 Usage
1. Open the live application [Here](https://dinesh-todolist-with-firebase.netlify.app/).
2. Add new records by filling out the form and clicking "Save".
3. View all records in the table.
4. Use the "✏️ Edit" button to modify a record or the "❌ Delete" button to remove it.

## 📂 Project Structure
```
.
├── css
│   └── style.css       # Styles for the application
├── js
│   └── script.js       # JavaScript functionality and Firebase integration
├── index.html          # Main HTML file
└── README.md           # Documentation
```

## 📸 Screenshots

### 📝 Add and View Users

![Screenshot (164)](https://github.com/user-attachments/assets/971ea9a9-5044-42d7-b37b-4a75d67f5d49)

### ✏️ Edit Users

![Screenshot (165)](https://github.com/user-attachments/assets/9541c4b5-cfa4-42ef-b9e9-a990721ec43f)

### ❌ Delete Users

![Screenshot (166)](https://github.com/user-attachments/assets/608d7f8e-9524-4427-80fc-9c66be269f1b)


## 🤝 Contributing
Contributions are welcome! Please fork this repository and submit a pull request for any improvements or bug fixes.

