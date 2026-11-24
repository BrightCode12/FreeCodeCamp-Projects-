const elements = {
	city: document.getElementById("city"),
	btn: document.getElementById("get-weather-btn"),
	container: document.getElementById("weather-container"),
	icon: document.getElementById("weather-icon"),
	temp: document.getElementById("main-temperature"),
	feelsLike: document.getElementById("feels-like"),
	humidity: document.getElementById("humidity"),
	wind: document.getElementById("wind"),
	gust: document.getElementById("wind-gust"),
	condition: document.getElementById("weather-main"),
	location: document.getElementById("location"),
	main: document.querySelector(".main-ctn"),
};

const formatField = (value, suffix = "") =>
	value != null ? `${value}${suffix}` : "N/A";

elements.btn.addEventListener("click", () => {
	const selectedCity = elements.city.value;

	if (selectedCity) {
		showWeather(selectedCity);
	}
});

// async function getWeather(city) {
// 	try {
// 		const response = await fetch(
// 			`https://weather-proxy.freecodecamp.rocks/api/city/${encodeURIComponent(city)}`,
// 		);
// 		if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
// 		return await response.json();
// 	} catch (error) {
// 		console.error(error);
// 		return undefined;
// 	}
// }

function updateWeatherTheme(condition) {
	const themes = {
		clear: "weather-sunny",
		clouds: "weather-cloudy",
		rain: "weather-rainy",
		drizzle: "weather-rainy",
		snow: "weather-snowy",
		thunderstorm: "weather-stormy",
		mist: "weather-mist",
		fog: "weather-mist",
		haze: "weather-mist",
	};

	const themeClasses = [
		"weather-sunny",
		"weather-cloudy",
		"weather-rainy",
		"weather-snowy",
		"weather-stormy",
		"weather-mist",
	];

	elements.main.classList.remove(...themeClasses);

	const theme = themes[condition.toLowerCase()];

	if (theme) {
		elements.main.classList.add(theme);
	}
}

async function getWeather(city) {
	const url = `https://weather-proxy.freecodecamp.rocks/api/city/${encodeURIComponent(city)}`;

	console.log("Request URL:", url);

	try {
		const response = await fetch(url);

		console.log("Response status:", response.status);

		if (!response.ok) {
			throw new Error(`HTTP ${response.status}: ${response.statusText}`);
		}

		const data = await response.json();

		console.log("Weather data:", data);
		return data;
	} catch (error) {
		console.error("Weather request failed:", error);
		return undefined;
	}
}

async function showWeather(city) {
	try {
		const data = await getWeather(city);

		if (!data || !data.main || !data.weather?.[0]) {
			alert("Something went wrong, please try again later");
			return;
		}

		elements.icon.src = data.weather[0].icon ?? "";
		elements.icon.alt = data.weather?.[0]?.description ?? "Weather icon";

		const weatherFields = [
			{ el: elements.temp, val: data.main.temp, unit: "°C" },
			{ el: elements.feelsLike, val: data.main.feels_like, unit: "°C" },
			{ el: elements.humidity, val: data.main.humidity, unit: "%" },
			{ el: elements.wind, val: data.wind?.speed, unit: " m/s" },
			{ el: elements.gust, val: data.wind?.gust, unit: " m/s" },
			{ el: elements.condition, val: data.weather?.[0]?.main },
			{
				el: elements.location,
				val: `${data.name}, ${data.sys?.country ?? ""}`
			}
		];

		weatherFields.forEach(({ el, val, unit = "" }) => {
			el.textContent = formatField(val, unit);
		});

		updateWeatherTheme(data.weather?.[0]?.main ?? "");

		elements.container.style.display = "grid";

	} catch (error) {
		console.error(error);
		alert("Unable to display weather information.")
	}
}
