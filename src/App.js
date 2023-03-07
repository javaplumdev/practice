import React, { useEffect, useState } from 'react';

const App = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch('https://randomuser.me/api/')
			.then((response) => response.json())
			.then((data) => setData(data.results));
	}, []);

	return (
		<div>
			{data.map((item, id) => {
				return <p key={id}>{item.email}</p>;
			})}
		</div>
	);
};

export default App;
