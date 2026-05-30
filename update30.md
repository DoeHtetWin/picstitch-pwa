Flickering in iOS and android fixed
improve memory management
Fixed horizontal and vertical combined not working properly
can test with Local Wi-Fi Test (Ultimate Real-World Test) (achieve with this code
// id: (window.crypto && window.crypto.randomUUID) ? window.crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).substring(2),// ) in imageInput and saveCanvasAsGroup()
    - type cmd , type config
    - look for IP4 Address
    - Run your local server: Assuming you are using an extension like VS Code's "Live Server" to view your files, note the port number it runs on (usually 5500).
    - Open your phone: Connect your phone to the same Wi-Fi as your computer. Open Safari or Chrome on your phone and type in the IP address and port together, like this: http://192.168.1.15:5500.


- Implement App's Preview List (The Small Thumbnails)
- Fix Drag and Drop function not working properly in iOS

- Add banner notifications for export jpg and pdf
- iOS offline bug fixed

update 15

Key changes applied:

- Firefox/Cross-Platform Bug Fix: Added the explicit event parameter to the HTML buttons and JavaScript export functions (downloadImage(event) and exportPDF(event)) so it no longer throws a reference error.

- Mobile UI Freezing (Optimization): Added a small setTimeout block inside combineVertical and combineHorizontal. This forces the browser to update the UI (showing the toast) before locking the main thread to do the heavy canvas pixel math.

- Memory Protection (Optimization): Added a safeguard in the upload listener restricting the total active images to 20, preventing silent out-of-memory crashes on iOS Safari.

- Drag-and-Drop Conflict (UX): Added touch-action: none; to .preview-item so scrolling down the page doesn't accidentally trigger a drag event on mobile devices.

- Empty States & Feedback (UX): Added toast notifications when images start loading, and warning toasts if you click export/combine without selecting any photos.

update 16


Your current:

toDataURL()
freezes
allocates giant strings

New version:

binary blobs
lower memory
faster export
fewer Android crashes

BIGGEST PERFORMANCE IMPROVEMENTS

These replacements will significantly improve:

Android memory usage
export stability
crop responsiveness
large screenshot handling
Redmi/Xiaomi browser stability
mobile GPU rendering
large canvas reliability
export speed
crash prevention

Most important improvements:

createImageBitmap()
removing base64 previews
OffscreenCanvas export
blob-based export pipeline
bitmap cleanup

update 17

Device-aware canvas limits // function getDeviceLimits()
✅ Mobile safety improved

clean bitmaps
revoke object URLs
lock processing
lock combining
cleanup crop modal

update 18
Adding Free Form Crop

update 19
Crop UI changes

update 20
Optimize text and UI changes

update 22
Remove magnifier
fix blank android preview 

update 23
Fix export image same file size even though after changing export quality
Fix horizonatal and vertical stich do not appear in the canvas for more than 5 photos

update 24
Fix glitches and flickering in crop mode
Fix export image and pdf quality according to export quality
Add export selected images for export image and export pdf
Add export pdf to choose combine pdf or separate pdf

update 25
Remove perspective crop in combined canvas
Fix reset button not working in combined canvas
Add rotate and flip button
Rename Click to Perspective Crop to Perspective Crop
Reduce font size of buttons and padding

update 26
CleanUp function v1

update 27
CleanUp function v2
Standard Crop becomes permanent like Perspective Crop

update 28
1. Lazy Raw Image Loading
2. Rerender Throttling
3. DOM Diffing (vs. Rebuilding innerHTML)
4. Reducing Blob Re-encodes

update 29
Bug fix and optimization

update 30
Remove android sharesheet and add direct download
