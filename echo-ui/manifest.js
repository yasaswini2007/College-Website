{
  "manifest_version": 3,
  "name": "Echo AI Assistant",
  "version": "1.0",
  "permissions": ["activeTab", "scripting"],
  "host_permissions": ["http://127.0.0.1:3000/*"],
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["content.js"]
    }
  ]
}
