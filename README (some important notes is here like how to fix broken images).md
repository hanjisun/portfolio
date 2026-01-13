
How to upolad static html pages to github:
https://www.youtube.com/watch?v=BT4WzyT2g8k

Usual fix when there is a new website revamp (no show images in my images and Recent Projects)
-------------------------------------------------------------------------------------
My Images link path:
http://portfolio-staging-v2/wp-content/uploads/2026/01/Profile-December-2025.jpg
images/2026/Profile-December-2025.jpg"

Recent Projects:
url("http://localhost:10011/wp-content/uploads/2022/12/fbr1.jpg")
-------------------------------------------------------------------------------------

------> My Images (Hero image, BG image and Quote BG image)
images/2026/


------> Recent Projects
../images/2026/


----------- STEPS HOW TO FIX BROKEN BLANK IMAGES:-------------

My original images link path:

From: http://portfolio-staging-v2/wp-content/uploads/2026/01/Profile-December-2025.jpg
To: images/2026/Profile-December-2025.jpg


Recent Projects:

From: http://localhost:10011/wp-content/uploads/2022/12/fbr1.jpg
To: ../images/2026/fbr1.jpg


