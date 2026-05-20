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
