# MK store (shop + separate admin site)

## Run it in Visual Studio Code
1. Install Node.js 18 or newer: https://nodejs.org (one time).
2. Unzip `mk-project.zip`, then in VS Code choose File > Open Folder and pick the `mk-project` folder.
3. Open a terminal: Terminal > New Terminal.
4. Type `npm start` and press Enter. (Or press F5 / Ctrl+Shift+B.)
5. Open the links it prints:
   - Shop:  http://localhost:3000
   - Admin: http://localhost:4000  (password = ADMIN_PASSWORD in the `.env` file)
6. Press Ctrl+C in the terminal to stop.

No `npm install` is needed. There are no packages.

## First things to change
- `.env`: set your own ADMIN_PASSWORD.
- `shop/data/banks.json`: put your real bank accounts (customers see these at checkout).
- Product photos: see `IMAGES.txt`.

## How it fits together
- `shop/`  public website + order API. It has no admin pages.
- `admin/` private admin site. It talks to the shop with a shared secret key that `start.js` creates.
- Orders are saved in `shop/data/orders.json` (back this file up).

Open the shop at http://localhost:3000. Do not double-click the HTML files, or orders cannot be sent.
Card payments are demo only (no real charge) until you connect a payment provider.
