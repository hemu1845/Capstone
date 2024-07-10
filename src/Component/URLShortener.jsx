import React, { useState } from "react";
import "./URLShortener.css";

const URLShortener = ({ onLogout }) => {
  const [shortUrl, setShortUrl] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [longUrl, setLongUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      longUrl: longUrl,
    };

    try {
      const response = await fetch("http://localhost:8882/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        const data = await response.json();
        setShortUrl(data.shortUrl); // Assuming shortUrl is the shortened URL
        setQrCode(data.qrCode); // Assuming qrCode is the QR code image in Base64 format
      } else {
        console.error("Failed to shorten URL");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    alert("URL copied to clipboard!");
  };

  return (
    <div className="maincontainer">
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="long-url">Enter or Paste Your long URL:</label>
        <input
          type="text"
          id="long-url"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          required
        />
        <button type="submit">Shorten</button>
      </form>
      {shortUrl && (
        <div id="short-url-container">
          <p>Here's your shortened URL:</p>
          <div id="short-url">
            <a href={shortUrl} target="_blank" rel="noopener noreferrer">
              {shortUrl}
            </a>
            <button onClick={handleCopy}>Copy</button>
          </div>
          {qrCode && (
            <div id="qr-code">
              <img src={`data:image/png;base64,${qrCode}`} alt="QR Code" />
            </div>
          )}
        </div>
      )}
      <button className="logout-btn" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default URLShortener;
