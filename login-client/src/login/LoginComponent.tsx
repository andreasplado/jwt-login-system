import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class LoginComponent extends React.Component {
    render() {
      return (
        <div className="shopping-list">
          <h1>Shopping List for</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
        </div>
      );
    }
  }