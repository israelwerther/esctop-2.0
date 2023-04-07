"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCredcoopClientDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_credcoop_client_dto_1 = require("./create-credcoop-client.dto");
class UpdateCredcoopClientDto extends (0, mapped_types_1.PartialType)(create_credcoop_client_dto_1.CreateCredcoopClientDto) {
}
exports.UpdateCredcoopClientDto = UpdateCredcoopClientDto;
//# sourceMappingURL=update-credcoop-client.dto.js.map