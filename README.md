This project demonstrates a fully functioning eCommerce website, utilizing the MERN (MongoDB, Express, React, Node) stack.

Visual demonstrations may be seen at https://www.wontaejungportfolio.com/mywork

Front-end: ReactJS, HTML, CSS, Redux
Back-end: NodeJS, ExpressJS
Database: MongoDB
Version Control: Git Bash

Feature 1:
Add to cart functionality utilizing redux state management.
Cart information is stored locally through js-cookie management, so users may navigate through different pages without losing their cart information.

Feature 2:
Admin/User login controlled by JWT authentication.
User information is tokenized and verified with the database to safely record, and match login information.
Users may update their information through the profile page, and available functionalities differ depending on admin status (ie: manage products, users).
Once logged in, user information is stored via cookie, with tokens that expire by the designated session timer. During this time, users may navigate through different pages and return, without having to re-login.

Feature 3:
Users may sort the list of products by the categories offered on the left, and right components, by clothing type, brand, price, and arrival date.
In case the user is on a different page, the user may use the hamburger on the top left, to instantly access the sort by category component.

Feature 4:
Admins may create products by filling the required information on the modal, which automatically updates the list of products on the main page.
Images are encoded and stored automatically in the database, removing the need to store the images locally.

Feature 5:
Admins may also edit, and delete products.
Similar to products, admins may create/read/edit/delete users and user information. However, admins may not create another admin account through the interface, which was intentionally disabled due to potential security concerns.
No restarts or refreshes are needed to update rendering information. All changes to products and users are reflected instantaneously in display.
