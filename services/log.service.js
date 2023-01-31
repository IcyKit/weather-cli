import chalk from "chalk";
import dedent from "dedent-js";

const printError = (err) => {
  console.log(chalk.bgRed(` ERROR: `), err);
};

const printSuccess = (msg) => {
  console.log(chalk.bgGreen(` SUCCESS: `), msg);
};

const printHelp = () => {
  console.log(
    dedent(`${chalk.bgBlue(" HELP ")}
    Без параметров - вывод погоды
    -h - вывод помощи
    -s [CITY] - установка города
    -t [API_KEY] - сохранение токена
    `)
  );
};

const printWeather = (res, icon) => {
  console.log(
    dedent(`${chalk.bgYellow(" WEATHER ")} Погода в городе ${res.name}
    ${icon}  ${res.weather[0].description}
    Температура: ${res.main.temp} (ощущается как ${res.main.feels_like})
    Влажность: ${res.main.humidity}%
    Скорость ветра: ${res.wind.speed} м/с
  `)
  );
};

export { printError, printSuccess, printHelp, printWeather };
