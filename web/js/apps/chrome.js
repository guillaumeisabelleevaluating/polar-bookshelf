"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Launcher_1 = require("./Launcher");
const Logger_1 = require("../logger/Logger");
const log = Logger_1.Logger.create();
new Launcher_1.Launcher().launch()
    .then(() => log.info("App now loaded."))
    .catch(err => log.error(err));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hyb21lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hyb21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQW9DO0FBQ3BDLDZDQUF3QztBQUV4QyxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsSUFBSSxtQkFBUSxFQUFFLENBQUMsTUFBTSxFQUFFO0tBQ2xCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7S0FDdkMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMYXVuY2hlcn0gZnJvbSAnLi9MYXVuY2hlcic7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAnLi4vbG9nZ2VyL0xvZ2dlcic7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxubmV3IExhdW5jaGVyKCkubGF1bmNoKClcbiAgICAudGhlbigoKSA9PiBsb2cuaW5mbyhcIkFwcCBub3cgbG9hZGVkLlwiKSlcbiAgICAuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihlcnIpKTtcblxuXG4iXX0=