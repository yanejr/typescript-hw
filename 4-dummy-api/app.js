"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var Roles;
(function (Roles) {
    Roles[Roles["moderator"] = 0] = "moderator";
    Roles[Roles["admin"] = 1] = "admin";
    Roles[Roles["user"] = 2] = "user";
})(Roles || (Roles = {}));
var Gender;
(function (Gender) {
    Gender[Gender["female"] = 0] = "female";
    Gender[Gender["male"] = 1] = "male";
})(Gender || (Gender = {}));
function fetchData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield fetch(url);
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = yield res.json();
            console.log(data);
            return data;
        }
        catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
            else {
                console.error(error);
            }
            return null;
        }
    });
}
