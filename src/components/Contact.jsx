// import React from "react";
import '../assets/contact.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import React, { useState } from 'react';

function Contact() {

  const [copyMessage, setCopyMessage] = useState('');

  // const handleCopyEmail = async () => {
  //   try {
  //     await navigator.clipboard.writeText('arochas846@gmail.com');
  //     setCopyMessage('Email copied to clipboard!');
  //     setTimeout(() => {
  //       setCopyMessage('');
  //     }, 2000); // Clear the message after 2 seconds
  //   } catch (err) {
  //     setCopyMessage('Failed to copy email');
  //   }
  // };

  // const handleCopyEmail = async () => {
  //   try {
  //     if (navigator.clipboard) {
  //       // Check if navigator.permissions API is supported
  //       if (navigator.permissions) {
  //         // Request permission to access clipboard (for Safari on iOS/mobile)
  //         const permissionStatus = await navigator.permissions.query({ name: 'clipboard-write' });
  //         if (permissionStatus.state === 'granted') {
  //           await navigator.clipboard.writeText('arochas846@gmail.com');
  //           setCopyMessage('Email copied to clipboard!');
  //           setTimeout(() => {
  //             setCopyMessage('');
  //           }, 2000);
  //         } else {
  //           setCopyMessage('Please grant clipboard permission to copy the email');
  //         }
  //       } else {
  //         // Fallback for browsers that don't support navigator.permissions (e.g., Chrome on desktop)
  //         await navigator.clipboard.writeText('arochas846@gmail.com');
  //         setCopyMessage('Email copied to clipboard!');
  //         setTimeout(() => {
  //           setCopyMessage('');
  //         }, 2000);
  //       }
  //     } else {
  //       setCopyMessage('Clipboard API not supported');
  //     }
  //   } catch (err) {
  //     setCopyMessage('Failed to copy email');
  //   }
  // };

  // const copyEmailToClipboard = async () => {
  //   try {
  //     if (navigator.clipboard) {
  //       await navigator.clipboard.writeText('arochas846@gmail.com');
  //       setCopyMessage('Email copied to clipboard!');
  //       setTimeout(() => {
  //         setCopyMessage('');
  //       }, 2000);
  //     } else {
  //       setCopyMessage('Clipboard API not supported');
  //     }
  //   } catch (err) {
  //     setCopyMessage('Failed to copy email');
  //   }
  // };

  // const handleCopyEmail = async () => {
  //   if (navigator.permissions) {
  //     const permissionStatus = await navigator.permissions.query({ name: 'clipboard-write' });
  //     if (permissionStatus.state === 'granted') {
  //       copyEmailToClipboard();
  //     } else {
  //       setCopyMessage('Please grant clipboard permission to copy the email');
  //     }
  //   } else {
  //     copyEmailToClipboard();
  //   }
  // };

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('arochas846@gmail.com');
      setCopyMessage('Email copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy email:', err);
      setCopyMessage('Failed to copy email');
    }
    setTimeout(() => {
      setCopyMessage('');
    }, 2000);
  };

  const handleCopyEmail = async () => {
    if (!navigator.clipboard) {
      // Clipboard API not supported
      setCopyMessage('Clipboard API not supported');
      return;
    }

    try {
      if (navigator.permissions) {
        // Check if permissions API is supported
        const permissionStatus = await navigator.permissions.query({ name: 'clipboard-write' });
        if (permissionStatus.state === 'granted' || permissionStatus.state === 'prompt') {
          copyEmailToClipboard();
        } else {
          setCopyMessage('Please grant clipboard permission to copy the email');
        }
      } else {
        // Fallback for browsers that don't support permissions API
        copyEmailToClipboard();
      }
    } catch (err) {
      console.error('Error copying email:', err);
      setCopyMessage('Failed to copy email');
    }
  };


  return (
    <>
    <div className="find">
    <h3 id="findMe">Find me</h3>
      <div className="findContainer">
        <a href="https://www.linkedin.com/in/santiago-arocha-64960b202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://github.com/Santi846" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        <a className="mail-container" onClick={handleCopyEmail}>
          <MdEmail className="icon" id="mail" />
          arochas846@gmail.com 
        </a>
      </div>
      <div>{copyMessage}</div>
    </div>
      
    </>
  );
}

export default Contact;
