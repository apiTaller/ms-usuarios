"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    const PORT = globalThis.process?.env?.PORT || 3000;
    await app.listen(PORT, '0.0.0.0');
    console.log(` Microservicio ms-usuarios corriendo en el puerto: ${PORT}`);
}
bootstrap();
//# sourceMappingURL=main.js.map