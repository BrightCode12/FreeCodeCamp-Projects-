const forumLatest =
	"https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://cdn.freecodecamp.org/curriculum/forum-latest";

const allCategories = {
	299: { category: "Career Advice", className: "career" },
	409: { category: "Project Feedback", className: "feedback" },
	417: { category: "freeCodeCamp Support", className: "support" },
	421: { category: "JavaScript", className: "javascript" },
	423: { category: "HTML - CSS", className: "html-css" },
	424: { category: "Python", className: "python" },
	432: { category: "You Can Do This!", className: "motivation" },
	560: { category: "Back-End Development", className: "backend" },
};

const timeAgo = (pastTime) => {
	const diffMin = Math.floor((Date.now() - new Date(pastTime)) / 60000);

	const units = [
		{ label: "m", divisor: 1, limit: 60 },
		{ label: "h", divisor: 60, limit: 24 },
		{ label: "d", divisor: 1440, limit: Infinity },
	];

	const match = units
		.map((unit) => ({
			value: Math.floor(diffMin / unit.divisor),
			label: unit.label,
			limit: unit.limit,
		}))
		.find((unit) => unit.value < unit.limit);

	return `${match.value}${match.label} ago`;
};

const viewCount = (view) => {
	if (view >= 1000) {
		return Math.floor(view / 1000) + "k";
	}
	return view;
};

const forumCategory = (num) => {
	const foundPair = Object.entries(allCategories).find(
		([id]) => Number(id) === num,
	);

	if (foundPair) {
		const [, { category: name, className }] = foundPair;
		return `<a class="category ${className}" href="${forumCategoryUrl}${className}/${num}">${name}</a>`;
	}

	return `<a class="category general" href="${forumCategoryUrl}general/${num}">General</a>`;
};

const avatars = (posters, users) => {
	return posters
		.map((poster) => {
			const user = users.find((user) => user.id === poster.user_id);
			if (user) {
				const avatar = user.avatar_template.replace("{size}", 30);
				const userAvatarUrl = avatar.startsWith("/user_avatar/")
					? avatarUrl.concat(avatar)
					: avatar;
				return `<img src = "${userAvatarUrl}" alt = "${user.name}"/>`;
			}
		})
		.join("");
};

const postContainer = document.getElementById("posts-container");

const fetchData = async () => {
	try {
		const res = await fetch(forumLatest);
		const data = await res.json();
		showLatestPosts(data);
	} catch (error) {
		console.error(error);
	}
};

const showLatestPosts = (data) => {
	const { topic_list, users } = data;
	const { topics } = topic_list;

	postContainer.innerHTML = topics.map((item) => {
		const {
			id,
			title,
			views,
			posts_count,
			slug,
			posters,
			category_id,
			bumped_at,
		} = item;
		return`<tr>
		<td>
		<a class ="post-title" href = "${forumTopicUrl}${slug}/${id}">${title}</a>
		${forumCategory(category_id)}
		</td>
		<td>
		  <div class ="avatar-container">
		      ${avatars(posters, users)}
		  </div>
		</td>
		<td>${posts_count - 1}</td>
		<td>${viewCount(views)}</td>
		<td>${timeAgo(bumped_at)}</td>
		
		</tr>
		`
	}).join("")
};

fetchData();
