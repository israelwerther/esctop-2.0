"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EsctopClientModule = void 0;
const common_1 = require("@nestjs/common");
const esctop_client_service_1 = require("./esctop-client.service");
const esctop_client_controller_1 = require("./esctop-client.controller");
let EsctopClientModule = class EsctopClientModule {
};
EsctopClientModule = __decorate([
    (0, common_1.Module)({
        controllers: [esctop_client_controller_1.EsctopClientController],
        providers: [esctop_client_service_1.EsctopClientService]
    })
], EsctopClientModule);
exports.EsctopClientModule = EsctopClientModule;
//# sourceMappingURL=esctop-client.module.js.map