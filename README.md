<h1>Tic-tac-toe</h1>
<p>Данный проект представляет собой реализацию крестиков-ноликов на Express.js и React-redux с использованием MongoDB.</p>
Перед запуском необходимо установить зависимости в папке проекта и в client.
<p><code>npm i</code></p>
<p>Для работы игры без сохранения статистики достаточно запустить клиентскую часть приложения из client.</p>
<p><code>npm start</code></p>
<p>Для сохранения статистики необходимо предварительно восстановить БД из app.
<p><code>mongorestore --db app &ltPath-to-repository&gt/app</code></p>
<p>Затем нужно поднять серверную часть из server.js.</p>
<p><code>node server.js</code></p>
