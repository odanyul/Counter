# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## 1. Feladat

-   készíts egy Header nevű komponenst, ami visszaad egy `<h1>` taget, amiben a szöveg az, hogy `Hello, React!`
-   default exportáld ezt a komponenst és jelenítsd meg az App komponensen belül
-   **Bónusz:** tegyél egy számot tartalmazó változót is a Header komponenst tartalmazó fájlba és exportáld azt külön

## 2. Feladat

-   készíts egy BusStation nevű komponenst
-   ebben a komponensben legyen egy tömb, ami buszok adatait tárolja
-   egy busz objektumban van rendszám, típus, ülőhelyek és állóhelyek száma (object legyen: férőhelyek száma, azon belül van ülő és álló)
-   a komponens renderelje ki az összes busz adatát
-   a komponenst az App komponensben jelenítsd meg
-   **Bónusz:** használj map-et a rendereléshez
