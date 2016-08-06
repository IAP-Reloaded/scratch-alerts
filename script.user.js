// ==UserScript==
// @name         Scratch Alerts++
// @namespace    http://simpcraft.com/
// @version      0.6
// @description  better alert messages for Scratch
// @author       @IAP-Reloaded
// @match        *://scratch.mit.edu/*
// @grant        none
// ==/UserScript==

Scratch.ALERT_MSGS = {
  'error': 'We don't know what, but something went wrong.',
  'inappropriate-generic': 'Hmm...the bad word detector thinks there is a problem with your text. Please change it and remember to <a target="_blank" href="/community_guidelines/">be respectful</a>.',
  'image-invalid': 'This image is not a .png or .gif, or it was corrupted.',
  'thumbnail-missing': 'Missing file',
  'thumbnail-upload-bad': 'Bad upload',
  'thumbnail-too-large': 'This file is too large. The maximum is 1 MB.',

  'inappropriate-comment': 'Hmm...the bad word detector thinks there is a problem with your comment. Please change it and remember to <a target="_blank" href="/community_guidelines/">be respectful</a>.',
  'comment-has-chat-site': 'Uh oh! This comment contains a link to a website with unmoderated chat. For safety reasons, please do not link to these sites!',

  'empty-comment': "You can't post an empty comment!",
  'delete_comment': '<div title="Delete Comment?"><p>Are you sure you want to delete this comment? If the comment is mean or disrespectful, please click report instead, to let the Scratch Team know about it.</p></div>',
  'report_comment': '<div title="Report Comment?"></p>Are you sure you want to report this comment?</p></div>',
  'report_comment_educator': 'Are you sure you want to delete this comment?',
  'followed': 'You are now following ',
  'unfollowed': 'You are now following ',
  'comment-spam': "Please refrain from spamming/posting the same message.",
  'comment-flood': "Please refrain from flooding/posting quickly. Please wait longer between posts.",
  'comment-muted': "Hmm, the filterbot is pretty sure your recent comments weren't ok for Scratch, so your account has been muted for the rest of the day. :/",
  'comment-unconstructive': "Please refrain from being unconstructive, mean, or disrespectful. Remember, most projects on Scratch are made by people who are just learning how to program. Please read the <a href='/community_guidelines'>community guidelines</a>.",
  'comment-disallowed': "Comments are not enabled on this page.",
  'project-complaint-length': "That's too short. Please describe in detail what's inappropriate or disrespectful about the project.",
  'project-complaint-buglength': "That's too short! Please describe in detail what you expected the project to do, and how exactly it is broken. Thanks!",
  'editable-text-too-long': "That's too long! Please find a way to shorten your text."

  ,'bio-changed': 'Saved changes to "About me".',
  'status-changed': 'Saved changes to "What I\'m working on".', 
  'thumbnail-changed': 'Saved changes to your thumbnail.',
  'featured-updated': 'Saved changes to your featured project.',

};


$("p").append("<p>Running <a href=\"http://github.com/Usernamer/scratchalerts-/\">Scratch Alerts++</a></p>");
