/* eslint-disable no-unused-vars */

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import BookBrowsing from "./BookBrowsing";
// import Recommendations from "./Recommendations";
// import EventListing from "./EventListing";
// import Wishlist from "./Wishlist";
// import QRScanner from "./QRScanner";
import HomePage from "./BookStore/HomePage";
import AdminLogin from "./BookStore/AdminLogIn";
import AdminDashboard from "./BookStore/AdminDashBoard";
import AddBookstore from "./BookStore/AddBookStore";
import UserPage from "./BookStore/UserPage";
import UserBookList from "./BookStore/UserBookList";

function App() {
  return (
    // <>
    //   {/* <BookBrowsing />

    //   <EventListing /> */}
    //   {/* <WishList /> */}
    // </>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/add-bookstore" element={<AddBookstore />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/user/books" element={<UserBookList />} />
      </Routes>
    </Router>
    // <h1>Hello there</h1>
    // <Router>
    //   <Routes>
    //     {/* <Route path="/" element={<BookBrowsing />} /> */}
    //     {/* <Route path="/recommendations" element={<Recommendations />} /> */}
    //     <Route path="/events" element={<EventListing />} />
    //     <Route path="/wishlist" element={<Wishlist />} />
    //     <Route path="/qr-scanner" element={<QRScanner />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
