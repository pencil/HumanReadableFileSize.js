HumanReadableFileSize.js
========================
A jQuery plugin to display file sizes in a human-readable format.

Installation
------------
Include the JavaScript file in the header section of your HTML page *after* jQuery. Example:

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js" type="text/javascript"></script>
    <script src="https://raw.github.com/pencil/HumanReadableFileSize.js/master/jquery.filesize.js" type="text/javascript"></script>

Usage Examples
--------------
    alert($.fileSize(50000)); // 50 KB
    alert($.fileSize(50000, 2, true)); // 48.83 KiB
    alert($.fileSize(1843875982)); // 1.84 GB
    alert($.fileSize(24886424, 1, true)); // 23.7 MiB
    alert($.fileSize(445)); // 445 B

Extended Usage Examples
-----------------------
    <span class="filesize">54788455578</span> <!-- 51.03 GiB -->
    <span class="filesize">2322</span> <!-- 2.27 KiB -->
    <script type="text/javascript">
      $('.filesize').fileSize(2, true);
    </script>