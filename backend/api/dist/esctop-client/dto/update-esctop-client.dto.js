"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEsctopClientDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_esctop_client_dto_1 = require("./create-esctop-client.dto");
class UpdateEsctopClientDto extends (0, mapped_types_1.PartialType)(create_esctop_client_dto_1.CreateEsctopClientDto) {
}
exports.UpdateEsctopClientDto = UpdateEsctopClientDto;
//# sourceMappingURL=update-esctop-client.dto.js.map