/**
 * 問題：
 * myFetch関数を使って以下の「データ取得の流れ」の通り、
 * 順次JSONを取得し、取得したデータを加工して、
 * 以下のメッセージをコンソールに表示してください。
 *
 * --Bob's timeline--
 * Tim says: waiting at station.
 * Sun says: go shopping?
 * John says: how's it going?
 * Sun says: drink?
 *
 ******************************
 * データ取得の流れ
 * １．"user1.json"を取得（Bobのユーザー情報取得）
 *
 * ２．"user1.json"のidの項目を元に
 *     `friendsOf${id}.json`でフレンド一覧を取得
 *
 * ３．取得したフレンドのID（ユーザーID）を元に、
 * 　　`user${id}.json`で各ユーザーの情報を取得
 *
 * ４．各ユーザー情報のlatestMsgIdが最後に投稿した
 * 　　メッセージのIDになりますので、そのidを用いて
 * 　　`message${friend.latestMsgId}.json`
 * 　　を取得。
 *
 * １～４で取得したデータをもとにコンソールログに
 * タイムラインの文字列を作成してください。
 *
 * ※await/asyncで記述してみてください。
 */
// async function myFetch(fileName) {
// 	const response = await fetch(`../json/${fileName}`);
// 	const json = await response.json();
// 	return json;
// }

function myFetch(fileName) {
	return fetch(`../json/${fileName}`).then(function (response) {
		return response.json()
	}).then(function (json) {
		return json;
	})
}

myFetch("user1.json").then(function (json) {
	console.log(`--${json.name}'s timeline--`);
	return json;
}).then(function (json) {
	return myFetch(`friendsOf${json.id}.json`);
}).then(function (friends) {
	const friendList = new Set();
	for (const friendId of friends.friendIds) {
		friendList.add(myFetch(`user${friendId}.json`))
	}
	return Promise.all(friendList)
}).then(function (friendDates) {
	const messageList = new Set();
	for (const friendData of friendDates) {
		messageList.add(myFetch(`message${friendData.latestMsgId}.json`))
	}
	Promise.all(messageList).then(function (messageDates) {
		for (const friend of friendDates) {
			for (const message of messageDates) {
				if (friend.id === message.userId) {
					console.log(` ${friend.name} says: ${message.message}.`)
				}
			}
		}
	})
})


// function init() {
// 	const user1 =  myFetch("user1.json");
// 	console.log(`--${user1.name}'s timeline--`);
// 	const friends = myFetch(`friendsOf${user1.id}.json`);
// 	console.log(friends)

// 	const frinedIds = new Set();
// 	for (const id of friends.friendIds) {
// 		frinedIds.add(myFetch(`user${id}.json`));
// 	}
// 	console.log(frinedIds)
// 	const friendList = Promise.all(frinedIds);
// 	console.log(friendList)

// 	const MessageIds = new Set();
// 	for (const friend of friendList) {
// 		MessageIds.add(myFetch(`message${friend.latestMsgId}.json`))
// 	}

// 	const messages = Promise.all(MessageIds);
// 	console.log(messages);

// 	for (const i of friendList) {
// 		for (const message of messages) {
// 			if (i.id === message.userId) {
// 				console.log(` ${i.name} says: ${message.message}.`)
// 			}
// 		}
// 	}
// }

// init();
