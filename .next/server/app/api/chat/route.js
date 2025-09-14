"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/chat/route";
exports.ids = ["app/api/chat/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=C%3A%5CUsers%5Comarc%5Ccfit-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Comarc%5Ccfit-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=C%3A%5CUsers%5Comarc%5Ccfit-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Comarc%5Ccfit-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_omarc_cfit_app_src_app_api_chat_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/chat/route.ts */ \"(rsc)/./src/app/api/chat/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/chat/route\",\n        pathname: \"/api/chat\",\n        filename: \"route\",\n        bundlePath: \"app/api/chat/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\omarc\\\\cfit-app\\\\src\\\\app\\\\api\\\\chat\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_omarc_cfit_app_src_app_api_chat_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/chat/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjaGF0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZjaGF0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY2hhdCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNvbWFyYyU1Q2NmaXQtYXBwJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNvbWFyYyU1Q2NmaXQtYXBwJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ1M7QUFDdEY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jZml0Lz84YjFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXG9tYXJjXFxcXGNmaXQtYXBwXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGNoYXRcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2NoYXQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9jaGF0XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9jaGF0L3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcb21hcmNcXFxcY2ZpdC1hcHBcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcY2hhdFxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9jaGF0L3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=C%3A%5CUsers%5Comarc%5Ccfit-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Comarc%5Ccfit-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/chat/route.ts":
/*!***********************************!*\
  !*** ./src/app/api/chat/route.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n\n\n\n\nasync function POST(request) {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        if (!session?.user) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"No autorizado\"\n            }, {\n                status: 401\n            });\n        }\n        const { message, userId } = await request.json();\n        if (!message || !userId) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Mensaje requerido\"\n            }, {\n                status: 400\n            });\n        }\n        // Verificar límites para usuarios gratuitos\n        if (session.user.role === \"FREE\") {\n            const today = new Date();\n            today.setHours(0, 0, 0, 0);\n            const messageCount = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.chatMessage.count({\n                where: {\n                    userId: userId,\n                    role: \"USER\",\n                    createdAt: {\n                        gte: today\n                    }\n                }\n            });\n            if (messageCount >= 5) {\n                return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                    error: \"Has alcanzado el l\\xedmite de mensajes diarios. Upgrade a Premium para mensajes ilimitados.\"\n                }, {\n                    status: 429\n                });\n            }\n        }\n        // Guardar mensaje del usuario\n        await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.chatMessage.create({\n            data: {\n                content: message,\n                role: \"USER\",\n                userId: userId\n            }\n        });\n        // Respuestas predefinidas para modo de prueba\n        const responses = {\n            \"sentadillas\": \"Las sentadillas son un ejercicio fundamental. Mant\\xe9n la espalda recta, baja como si te fueras a sentar en una silla, y aseg\\xfarate de que las rodillas no pasen de los dedos de los pies. \\xa1Perfecto para fortalecer piernas y gl\\xfateos!\",\n            \"plan\": \"Para crear un plan de entrenamiento necesito saber: tu nivel actual, objetivos espec\\xedficos, tiempo disponible y equipamiento. \\xbfPodr\\xedas contarme m\\xe1s sobre estos aspectos?\",\n            \"peso\": \"Para bajar de peso, combina ejercicio cardiovascular (caminar, correr, ciclismo) con entrenamiento de fuerza. La clave est\\xe1 en crear un d\\xe9ficit cal\\xf3rico sostenible y mantener la consistencia.\",\n            \"press\": \"El press de banca requiere t\\xe9cnica cuidadosa. Acu\\xe9state con los pies firmes en el suelo, agarra la barra con las manos separadas al ancho de los hombros, y baja controladamente hasta el pecho antes de empujar hacia arriba.\",\n            \"default\": \"\\xa1Excelente pregunta! Como asistente de fitness, puedo ayudarte con ejercicios, planes de entrenamiento y consejos de nutrici\\xf3n. \\xbfHay algo espec\\xedfico en lo que te gustar\\xeda que profundice?\"\n        };\n        // Buscar respuesta apropiada\n        let aiResponse = responses.default;\n        const messageLower = message.toLowerCase();\n        if (messageLower.includes(\"sentadilla\")) aiResponse = responses.sentadillas;\n        else if (messageLower.includes(\"plan\") || messageLower.includes(\"rutina\")) aiResponse = responses.plan;\n        else if (messageLower.includes(\"peso\") || messageLower.includes(\"adelgazar\")) aiResponse = responses.peso;\n        else if (messageLower.includes(\"press\") || messageLower.includes(\"banca\")) aiResponse = responses.press;\n        // Agregar nota sobre el modo de prueba\n        aiResponse += \"\\n\\n⚠️ **Modo de prueba**: Esta es una respuesta simulada. Para obtener respuestas personalizadas con IA, configura tu API key de OpenAI con cr\\xe9ditos disponibles.\";\n        // Guardar respuesta simulada\n        await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.chatMessage.create({\n            data: {\n                content: aiResponse,\n                role: \"ASSISTANT\",\n                userId: userId\n            }\n        });\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            message: aiResponse\n        });\n    } catch (error) {\n        console.error(\"Error en chat API:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Error interno del servidor\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9jaGF0L3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF1RDtBQUNYO0FBQ0o7QUFDSDtBQUU5QixlQUFlSSxLQUFLQyxPQUFvQjtJQUM3QyxJQUFJO1FBQ0YsTUFBTUMsVUFBVSxNQUFNTCwyREFBZ0JBLENBQUNDLGtEQUFXQTtRQUVsRCxJQUFJLENBQUNJLFNBQVNDLE1BQU07WUFDbEIsT0FBT1Asa0ZBQVlBLENBQUNRLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUFnQixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDckU7UUFFQSxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsTUFBTSxFQUFFLEdBQUcsTUFBTVAsUUFBUUcsSUFBSTtRQUU5QyxJQUFJLENBQUNHLFdBQVcsQ0FBQ0MsUUFBUTtZQUN2QixPQUFPWixrRkFBWUEsQ0FBQ1EsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQW9CLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUN6RTtRQUVBLDRDQUE0QztRQUM1QyxJQUFJSixRQUFRQyxJQUFJLENBQUNNLElBQUksS0FBSyxRQUFRO1lBQ2hDLE1BQU1DLFFBQVEsSUFBSUM7WUFDbEJELE1BQU1FLFFBQVEsQ0FBQyxHQUFHLEdBQUcsR0FBRztZQUV4QixNQUFNQyxlQUFlLE1BQU1kLCtDQUFNQSxDQUFDZSxXQUFXLENBQUNDLEtBQUssQ0FBQztnQkFDbERDLE9BQU87b0JBQ0xSLFFBQVFBO29CQUNSQyxNQUFNO29CQUNOUSxXQUFXO3dCQUNUQyxLQUFLUjtvQkFDUDtnQkFDRjtZQUNGO1lBRUEsSUFBSUcsZ0JBQWdCLEdBQUc7Z0JBQ3JCLE9BQU9qQixrRkFBWUEsQ0FBQ1EsSUFBSSxDQUFDO29CQUN2QkMsT0FBTztnQkFDVCxHQUFHO29CQUFFQyxRQUFRO2dCQUFJO1lBQ25CO1FBQ0Y7UUFFQSw4QkFBOEI7UUFDOUIsTUFBTVAsK0NBQU1BLENBQUNlLFdBQVcsQ0FBQ0ssTUFBTSxDQUFDO1lBQzlCQyxNQUFNO2dCQUNKQyxTQUFTZDtnQkFDVEUsTUFBTTtnQkFDTkQsUUFBUUE7WUFDVjtRQUNGO1FBRUEsOENBQThDO1FBQzlDLE1BQU1jLFlBQVk7WUFDaEIsZUFBZTtZQUNmLFFBQVE7WUFDUixRQUFRO1lBQ1IsU0FBUztZQUNULFdBQVc7UUFDYjtRQUVBLDZCQUE2QjtRQUM3QixJQUFJQyxhQUFhRCxVQUFVRSxPQUFPO1FBQ2xDLE1BQU1DLGVBQWVsQixRQUFRbUIsV0FBVztRQUV4QyxJQUFJRCxhQUFhRSxRQUFRLENBQUMsZUFBZUosYUFBYUQsVUFBVU0sV0FBVzthQUN0RSxJQUFJSCxhQUFhRSxRQUFRLENBQUMsV0FBV0YsYUFBYUUsUUFBUSxDQUFDLFdBQVdKLGFBQWFELFVBQVVPLElBQUk7YUFDakcsSUFBSUosYUFBYUUsUUFBUSxDQUFDLFdBQVdGLGFBQWFFLFFBQVEsQ0FBQyxjQUFjSixhQUFhRCxVQUFVUSxJQUFJO2FBQ3BHLElBQUlMLGFBQWFFLFFBQVEsQ0FBQyxZQUFZRixhQUFhRSxRQUFRLENBQUMsVUFBVUosYUFBYUQsVUFBVVMsS0FBSztRQUV2Ryx1Q0FBdUM7UUFDdkNSLGNBQWM7UUFFZCw2QkFBNkI7UUFDN0IsTUFBTXhCLCtDQUFNQSxDQUFDZSxXQUFXLENBQUNLLE1BQU0sQ0FBQztZQUM5QkMsTUFBTTtnQkFDSkMsU0FBU0U7Z0JBQ1RkLE1BQU07Z0JBQ05ELFFBQVFBO1lBQ1Y7UUFDRjtRQUVBLE9BQU9aLGtGQUFZQSxDQUFDUSxJQUFJLENBQUM7WUFBRUcsU0FBU2dCO1FBQVc7SUFFakQsRUFBRSxPQUFPbEIsT0FBTztRQUNkMkIsUUFBUTNCLEtBQUssQ0FBQyxzQkFBc0JBO1FBQ3BDLE9BQU9ULGtGQUFZQSxDQUFDUSxJQUFJLENBQ3RCO1lBQUVDLE9BQU87UUFBNkIsR0FDdEM7WUFBRUMsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jZml0Ly4vc3JjL2FwcC9hcGkvY2hhdC9yb3V0ZS50cz80NmI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcclxuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aCdcclxuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tICdAL2xpYi9hdXRoJ1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL2xpYi9wcmlzbWEnXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucylcclxuICAgIFxyXG4gICAgaWYgKCFzZXNzaW9uPy51c2VyKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnTm8gYXV0b3JpemFkbycgfSwgeyBzdGF0dXM6IDQwMSB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgbWVzc2FnZSwgdXNlcklkIH0gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKVxyXG5cclxuICAgIGlmICghbWVzc2FnZSB8fCAhdXNlcklkKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnTWVuc2FqZSByZXF1ZXJpZG8nIH0sIHsgc3RhdHVzOiA0MDAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBWZXJpZmljYXIgbMOtbWl0ZXMgcGFyYSB1c3VhcmlvcyBncmF0dWl0b3NcclxuICAgIGlmIChzZXNzaW9uLnVzZXIucm9sZSA9PT0gJ0ZSRUUnKSB7XHJcbiAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKVxyXG4gICAgICB0b2RheS5zZXRIb3VycygwLCAwLCAwLCAwKVxyXG4gICAgICBcclxuICAgICAgY29uc3QgbWVzc2FnZUNvdW50ID0gYXdhaXQgcHJpc21hLmNoYXRNZXNzYWdlLmNvdW50KHtcclxuICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICAgICAgICByb2xlOiAnVVNFUicsXHJcbiAgICAgICAgICBjcmVhdGVkQXQ6IHtcclxuICAgICAgICAgICAgZ3RlOiB0b2RheVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIGlmIChtZXNzYWdlQ291bnQgPj0gNSkge1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IFxyXG4gICAgICAgICAgZXJyb3I6ICdIYXMgYWxjYW56YWRvIGVsIGzDrW1pdGUgZGUgbWVuc2FqZXMgZGlhcmlvcy4gVXBncmFkZSBhIFByZW1pdW0gcGFyYSBtZW5zYWplcyBpbGltaXRhZG9zLicgXHJcbiAgICAgICAgfSwgeyBzdGF0dXM6IDQyOSB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR3VhcmRhciBtZW5zYWplIGRlbCB1c3VhcmlvXHJcbiAgICBhd2FpdCBwcmlzbWEuY2hhdE1lc3NhZ2UuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGNvbnRlbnQ6IG1lc3NhZ2UsXHJcbiAgICAgICAgcm9sZTogJ1VTRVInLFxyXG4gICAgICAgIHVzZXJJZDogdXNlcklkXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgLy8gUmVzcHVlc3RhcyBwcmVkZWZpbmlkYXMgcGFyYSBtb2RvIGRlIHBydWViYVxyXG4gICAgY29uc3QgcmVzcG9uc2VzID0ge1xyXG4gICAgICAnc2VudGFkaWxsYXMnOiAnTGFzIHNlbnRhZGlsbGFzIHNvbiB1biBlamVyY2ljaW8gZnVuZGFtZW50YWwuIE1hbnTDqW4gbGEgZXNwYWxkYSByZWN0YSwgYmFqYSBjb21vIHNpIHRlIGZ1ZXJhcyBhIHNlbnRhciBlbiB1bmEgc2lsbGEsIHkgYXNlZ8O6cmF0ZSBkZSBxdWUgbGFzIHJvZGlsbGFzIG5vIHBhc2VuIGRlIGxvcyBkZWRvcyBkZSBsb3MgcGllcy4gwqFQZXJmZWN0byBwYXJhIGZvcnRhbGVjZXIgcGllcm5hcyB5IGdsw7p0ZW9zIScsXHJcbiAgICAgICdwbGFuJzogJ1BhcmEgY3JlYXIgdW4gcGxhbiBkZSBlbnRyZW5hbWllbnRvIG5lY2VzaXRvIHNhYmVyOiB0dSBuaXZlbCBhY3R1YWwsIG9iamV0aXZvcyBlc3BlY8OtZmljb3MsIHRpZW1wbyBkaXNwb25pYmxlIHkgZXF1aXBhbWllbnRvLiDCv1BvZHLDrWFzIGNvbnRhcm1lIG3DoXMgc29icmUgZXN0b3MgYXNwZWN0b3M/JyxcclxuICAgICAgJ3Blc28nOiAnUGFyYSBiYWphciBkZSBwZXNvLCBjb21iaW5hIGVqZXJjaWNpbyBjYXJkaW92YXNjdWxhciAoY2FtaW5hciwgY29ycmVyLCBjaWNsaXNtbykgY29uIGVudHJlbmFtaWVudG8gZGUgZnVlcnphLiBMYSBjbGF2ZSBlc3TDoSBlbiBjcmVhciB1biBkw6lmaWNpdCBjYWzDs3JpY28gc29zdGVuaWJsZSB5IG1hbnRlbmVyIGxhIGNvbnNpc3RlbmNpYS4nLFxyXG4gICAgICAncHJlc3MnOiAnRWwgcHJlc3MgZGUgYmFuY2EgcmVxdWllcmUgdMOpY25pY2EgY3VpZGFkb3NhLiBBY3XDqXN0YXRlIGNvbiBsb3MgcGllcyBmaXJtZXMgZW4gZWwgc3VlbG8sIGFnYXJyYSBsYSBiYXJyYSBjb24gbGFzIG1hbm9zIHNlcGFyYWRhcyBhbCBhbmNobyBkZSBsb3MgaG9tYnJvcywgeSBiYWphIGNvbnRyb2xhZGFtZW50ZSBoYXN0YSBlbCBwZWNobyBhbnRlcyBkZSBlbXB1amFyIGhhY2lhIGFycmliYS4nLFxyXG4gICAgICAnZGVmYXVsdCc6ICfCoUV4Y2VsZW50ZSBwcmVndW50YSEgQ29tbyBhc2lzdGVudGUgZGUgZml0bmVzcywgcHVlZG8gYXl1ZGFydGUgY29uIGVqZXJjaWNpb3MsIHBsYW5lcyBkZSBlbnRyZW5hbWllbnRvIHkgY29uc2Vqb3MgZGUgbnV0cmljacOzbi4gwr9IYXkgYWxnbyBlc3BlY8OtZmljbyBlbiBsbyBxdWUgdGUgZ3VzdGFyw61hIHF1ZSBwcm9mdW5kaWNlPydcclxuICAgIH1cclxuXHJcbiAgICAvLyBCdXNjYXIgcmVzcHVlc3RhIGFwcm9waWFkYVxyXG4gICAgbGV0IGFpUmVzcG9uc2UgPSByZXNwb25zZXMuZGVmYXVsdFxyXG4gICAgY29uc3QgbWVzc2FnZUxvd2VyID0gbWVzc2FnZS50b0xvd2VyQ2FzZSgpXHJcbiAgICBcclxuICAgIGlmIChtZXNzYWdlTG93ZXIuaW5jbHVkZXMoJ3NlbnRhZGlsbGEnKSkgYWlSZXNwb25zZSA9IHJlc3BvbnNlcy5zZW50YWRpbGxhc1xyXG4gICAgZWxzZSBpZiAobWVzc2FnZUxvd2VyLmluY2x1ZGVzKCdwbGFuJykgfHwgbWVzc2FnZUxvd2VyLmluY2x1ZGVzKCdydXRpbmEnKSkgYWlSZXNwb25zZSA9IHJlc3BvbnNlcy5wbGFuXHJcbiAgICBlbHNlIGlmIChtZXNzYWdlTG93ZXIuaW5jbHVkZXMoJ3Blc28nKSB8fCBtZXNzYWdlTG93ZXIuaW5jbHVkZXMoJ2FkZWxnYXphcicpKSBhaVJlc3BvbnNlID0gcmVzcG9uc2VzLnBlc29cclxuICAgIGVsc2UgaWYgKG1lc3NhZ2VMb3dlci5pbmNsdWRlcygncHJlc3MnKSB8fCBtZXNzYWdlTG93ZXIuaW5jbHVkZXMoJ2JhbmNhJykpIGFpUmVzcG9uc2UgPSByZXNwb25zZXMucHJlc3NcclxuXHJcbiAgICAvLyBBZ3JlZ2FyIG5vdGEgc29icmUgZWwgbW9kbyBkZSBwcnVlYmFcclxuICAgIGFpUmVzcG9uc2UgKz0gJ1xcblxcbuKaoO+4jyAqKk1vZG8gZGUgcHJ1ZWJhKio6IEVzdGEgZXMgdW5hIHJlc3B1ZXN0YSBzaW11bGFkYS4gUGFyYSBvYnRlbmVyIHJlc3B1ZXN0YXMgcGVyc29uYWxpemFkYXMgY29uIElBLCBjb25maWd1cmEgdHUgQVBJIGtleSBkZSBPcGVuQUkgY29uIGNyw6lkaXRvcyBkaXNwb25pYmxlcy4nXHJcblxyXG4gICAgLy8gR3VhcmRhciByZXNwdWVzdGEgc2ltdWxhZGFcclxuICAgIGF3YWl0IHByaXNtYS5jaGF0TWVzc2FnZS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgY29udGVudDogYWlSZXNwb25zZSxcclxuICAgICAgICByb2xlOiAnQVNTSVNUQU5UJyxcclxuICAgICAgICB1c2VySWQ6IHVzZXJJZFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IGFpUmVzcG9uc2UgfSlcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGVuIGNoYXQgQVBJOicsIGVycm9yKVxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICB7IGVycm9yOiAnRXJyb3IgaW50ZXJubyBkZWwgc2Vydmlkb3InIH0sXHJcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxyXG4gICAgKVxyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJwcmlzbWEiLCJQT1NUIiwicmVxdWVzdCIsInNlc3Npb24iLCJ1c2VyIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwibWVzc2FnZSIsInVzZXJJZCIsInJvbGUiLCJ0b2RheSIsIkRhdGUiLCJzZXRIb3VycyIsIm1lc3NhZ2VDb3VudCIsImNoYXRNZXNzYWdlIiwiY291bnQiLCJ3aGVyZSIsImNyZWF0ZWRBdCIsImd0ZSIsImNyZWF0ZSIsImRhdGEiLCJjb250ZW50IiwicmVzcG9uc2VzIiwiYWlSZXNwb25zZSIsImRlZmF1bHQiLCJtZXNzYWdlTG93ZXIiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic2VudGFkaWxsYXMiLCJwbGFuIiwicGVzbyIsInByZXNzIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/chat/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var _auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth/prisma-adapter */ \"(rsc)/./node_modules/@auth/prisma-adapter/index.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n\n\n\n\n\nconst authOptions = {\n    adapter: (0,_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__.PrismaAdapter)(_lib_prisma__WEBPACK_IMPORTED_MODULE_4__.prisma),\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        }),\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    return null;\n                }\n                const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_4__.prisma.user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (!user) {\n                    return null;\n                }\n                // Verificar contraseña usando bcrypt\n                const isPasswordValid = await bcryptjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].compare(credentials.password, user.password);\n                if (!isPasswordValid) {\n                    return null;\n                }\n                return {\n                    id: user.id,\n                    email: user.email,\n                    name: user.name,\n                    role: user.role\n                };\n            }\n        })\n    ],\n    session: {\n        strategy: \"jwt\"\n    },\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.role = user.role;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (token) {\n                session.user.id = token.sub;\n                session.user.role = token.role;\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/auth/signin\",\n        signUp: \"/auth/signup\"\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ29EO0FBQ2E7QUFDVjtBQUMxQjtBQUNRO0FBRzlCLE1BQU1LLGNBQStCO0lBQzFDQyxTQUFTTixtRUFBYUEsQ0FBQ0ksK0NBQU1BO0lBQzdCRyxXQUFXO1FBQ1RMLHNFQUFjQSxDQUFDO1lBQ2JNLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsZ0JBQWdCO1lBQ3RDQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLG9CQUFvQjtRQUNoRDtRQUNBWiwyRUFBbUJBLENBQUM7WUFDbEJhLE1BQU07WUFDTkMsYUFBYTtnQkFDWEMsT0FBTztvQkFBRUMsT0FBTztvQkFBU0MsTUFBTTtnQkFBUTtnQkFDdkNDLFVBQVU7b0JBQUVGLE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQSxNQUFNRSxXQUFVTCxXQUFXO2dCQUN6QixJQUFJLENBQUNBLGFBQWFDLFNBQVMsQ0FBQ0QsYUFBYUksVUFBVTtvQkFDakQsT0FBTztnQkFDVDtnQkFFQSxNQUFNRSxPQUFPLE1BQU1qQiwrQ0FBTUEsQ0FBQ2lCLElBQUksQ0FBQ0MsVUFBVSxDQUFDO29CQUN4Q0MsT0FBTzt3QkFDTFAsT0FBT0QsWUFBWUMsS0FBSztvQkFDMUI7Z0JBQ0Y7Z0JBRUEsSUFBSSxDQUFDSyxNQUFNO29CQUNULE9BQU87Z0JBQ1Q7Z0JBRUEscUNBQXFDO2dCQUNyQyxNQUFNRyxrQkFBa0IsTUFBTXJCLHdEQUFjLENBQUNZLFlBQVlJLFFBQVEsRUFBRUUsS0FBS0YsUUFBUTtnQkFFaEYsSUFBSSxDQUFDSyxpQkFBaUI7b0JBQ3BCLE9BQU87Z0JBQ1Q7Z0JBRUEsT0FBTztvQkFDTEUsSUFBSUwsS0FBS0ssRUFBRTtvQkFDWFYsT0FBT0ssS0FBS0wsS0FBSztvQkFDakJGLE1BQU1PLEtBQUtQLElBQUk7b0JBQ2ZhLE1BQU1OLEtBQUtNLElBQUk7Z0JBQ2pCO1lBQ0Y7UUFDRjtLQUNEO0lBQ0RDLFNBQVM7UUFDUEMsVUFBVTtJQUNaO0lBQ0FDLFdBQVc7UUFDVCxNQUFNQyxLQUFJLEVBQUVDLEtBQUssRUFBRVgsSUFBSSxFQUFFO1lBQ3ZCLElBQUlBLE1BQU07Z0JBQ1JXLE1BQU1MLElBQUksR0FBR04sS0FBS00sSUFBSTtZQUN4QjtZQUNBLE9BQU9LO1FBQ1Q7UUFDQSxNQUFNSixTQUFRLEVBQUVBLE9BQU8sRUFBRUksS0FBSyxFQUFFO1lBQzlCLElBQUlBLE9BQU87Z0JBQ1RKLFFBQVFQLElBQUksQ0FBQ0ssRUFBRSxHQUFHTSxNQUFNQyxHQUFHO2dCQUMzQkwsUUFBUVAsSUFBSSxDQUFDTSxJQUFJLEdBQUdLLE1BQU1MLElBQUk7WUFDaEM7WUFDQSxPQUFPQztRQUNUO0lBQ0Y7SUFDQU0sT0FBTztRQUNMQyxRQUFRO1FBQ1JDLFFBQVE7SUFDVjtBQUNGLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jZml0Ly4vc3JjL2xpYi9hdXRoLnRzPzY2OTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSBcIm5leHQtYXV0aFwiXG5pbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSBcIkBhdXRoL3ByaXNtYS1hZGFwdGVyXCJcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCJcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIlxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIlxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIkAvbGliL3ByaXNtYVwiXG5pbXBvcnQgeyBVc2VyUm9sZSB9IGZyb20gXCJAL3R5cGVzXCJcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XG4gIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIocHJpc21hKSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQhLFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCEsXG4gICAgfSksXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBuYW1lOiBcImNyZWRlbnRpYWxzXCIsXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICBlbWFpbDogeyBsYWJlbDogXCJFbWFpbFwiLCB0eXBlOiBcImVtYWlsXCIgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH1cbiAgICAgIH0sXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgaWYgKCFjcmVkZW50aWFscz8uZW1haWwgfHwgIWNyZWRlbnRpYWxzPy5wYXNzd29yZCkge1xuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbFxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVmVyaWZpY2FyIGNvbnRyYXNlw7FhIHVzYW5kbyBiY3J5cHRcbiAgICAgICAgY29uc3QgaXNQYXNzd29yZFZhbGlkID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUoY3JlZGVudGlhbHMucGFzc3dvcmQsIHVzZXIucGFzc3dvcmQhKVxuICAgICAgICBcbiAgICAgICAgaWYgKCFpc1Bhc3N3b3JkVmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpZDogdXNlci5pZCxcbiAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXG4gICAgICAgICAgcm9sZTogdXNlci5yb2xlLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgXSxcbiAgc2Vzc2lvbjoge1xuICAgIHN0cmF0ZWd5OiBcImp3dFwiXG4gIH0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHRva2VuLnJvbGUgPSB1c2VyLnJvbGVcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2tlblxuICAgIH0sXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICBzZXNzaW9uLnVzZXIuaWQgPSB0b2tlbi5zdWIhXG4gICAgICAgIHNlc3Npb24udXNlci5yb2xlID0gdG9rZW4ucm9sZSBhcyBVc2VyUm9sZVxuICAgICAgfVxuICAgICAgcmV0dXJuIHNlc3Npb25cbiAgICB9XG4gIH0sXG4gIHBhZ2VzOiB7XG4gICAgc2lnbkluOiBcIi9hdXRoL3NpZ25pblwiLFxuICAgIHNpZ25VcDogXCIvYXV0aC9zaWdudXBcIixcbiAgfVxufSJdLCJuYW1lcyI6WyJQcmlzbWFBZGFwdGVyIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsIkdvb2dsZVByb3ZpZGVyIiwiYmNyeXB0IiwicHJpc21hIiwiYXV0aE9wdGlvbnMiLCJhZGFwdGVyIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJpc1Bhc3N3b3JkVmFsaWQiLCJjb21wYXJlIiwiaWQiLCJyb2xlIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJzdWIiLCJwYWdlcyIsInNpZ25JbiIsInNpZ25VcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/prisma.ts":
/*!***************************!*\
  !*** ./src/lib/prisma.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3ByaXNtYS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkM7QUFFN0MsTUFBTUMsa0JBQWtCQztBQUlqQixNQUFNQyxTQUFTRixnQkFBZ0JFLE1BQU0sSUFBSSxJQUFJSCx3REFBWUEsR0FBRTtBQUVsRSxJQUFJSSxJQUF5QixFQUFjSCxnQkFBZ0JFLE1BQU0sR0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jZml0Ly4vc3JjL2xpYi9wcmlzbWEudHM/MDFkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcclxuXHJcbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbFRoaXMgYXMgdW5rbm93biBhcyB7XHJcbiAgcHJpc21hOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWRcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHByaXNtYSA9IGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPz8gbmV3IFByaXNtYUNsaWVudCgpXHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYVxyXG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiZ2xvYmFsRm9yUHJpc21hIiwiZ2xvYmFsVGhpcyIsInByaXNtYSIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/@auth","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=C%3A%5CUsers%5Comarc%5Ccfit-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Comarc%5Ccfit-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();