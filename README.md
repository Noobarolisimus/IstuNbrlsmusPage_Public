# Что за репа такая?
В этот репозиторий любой* может внести изменения. Результат можете посмотреть [тут](https://istu.nbrlsmus.ru). Изменения будут автоматически внесены. Главное — чтобы они соответсвовали правилам. <br/>
Прямо сейчас робот, следящий за выполнениями правил, находится в разработке, как и условия использования Репозитория (ЛИЦЕНЗИЯ.txt). Поэтому какое-то время отбор будет проводиться вручную. <br/>
*Любой Разработчик через <i>pull request</i> согласно правилам и лицензии.
### Устройство и правила Репозитория:
1. По усмотрению Организатора (создателя Репозитория) содержание Репозитория может измениться как угодно.
2. Для каждого Разработчика выделена папка в [`/custom`](https://github.com/Noobarolisimus/IstuNbrlsmusPage_Public/tree/master/custom), она создаётся Разработчиком. Её название начинается на `@`, далее следует набор символом по усмотрению создателя. Название можно выбрать лишь единожды. <br/>
Как-либо изменять содержимое папки могут только те, чей ID указан в файле `info.json` в этой папке. В нём указываются только ID Разработчика и доверенные ID в определённом формате (пример: [`/custom/@nbrlsmus/info.json`](https://github.com/Noobarolisimus/IstuNbrlsmusPage_Public/blob/master/custom/%40nbrlsmus/info.json)). Если при посылке Размещаемого контента, в котором была создана такая папка, `info.json` не был создан, то робот сделает это автоматически, вписав ID автора (когда заработает). <br/>
Один гитхаб аккаунт может иметь только одну выделенную папку. <br/>
Пример организации выделенной папки — [`/custom/@nbrlsmus`](https://github.com/Noobarolisimus/IstuNbrlsmusPage_Public/tree/master/custom/@nbrlsmus).
3. В [`/custom/common`](https://github.com/Noobarolisimus/IstuNbrlsmusPage_Public/tree/master/custom/common) можно изменять любой файл, но не удалять или добавлять. [`index.html`](https://github.com/Noobarolisimus/IstuNbrlsmusPage_Public/blob/master/custom/common/index.html) — это страница, которая будет отображаться.
4. Запрещено изменять файлы, добавлять/удалять файлы или папки, кроме описанных выше.
5. Запрещены:
    - [WASM](https://ru.wikipedia.org/wiki/WebAssembly)
    - Переход страницы на внешние ресурсы, будь то в новой вкладке или нет
    - Как-либо вредить человеку, открывшему Сайт. Например, бесконечное открытие вкладок, обман, нарошный вызов зависания браузера и т.п.

Нарушителей ожидает предупреждение или <b>БАН</b>. <br/>
Если вы хотите правила как-то обойти, например, изменить имя своей папки, то пишите с предложением [мне](https://t.me/nbrlsmus).

# ЧаВо:
### Как узнать чей-то ID на гитхабе?
https://api.github.com/users/github_user_name <br/>
Вместо <i>github_user_name</i> пишем свой никнейм и вставляем в браузер. Находим поле `id`.

### Я сделал изменения у себя на компьютере, как их проверить?
Устанавливаем [python](https://www.python.org/downloads/). Пишем в терминале в корне проекта:
``` bash
python3 -m http.server
```
Переходим на [`localhost:8000/custom/common/index.html`](http://localhost:8000/custom/common/index.html) в браузере. <br/>
Чтобы остановить, нажимаем `Ctrl+C` либо `Ctrl+D` или закрываем терминал.

### Как поучаствовать в проекте? <small>или</small> Как сделать <i>pull request</i> ?
Смотреть тут [на русском](https://docs.github.com/ru/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) или тут [на английском](https://git-scm.com/book/en/v2/GitHub-Contributing-to-a-Project).

#### Кратко:
1. На странице Репозитория делаем <i>fork</i>
    ![fork](https://github.com/Noobarolisimus/IstuNbrlsmusPage_Public/blob/master/custom/gh_imgs/fork.png?raw=true)
2. Вносим изменения в свой репозиторий
3. На странице своего репозитория делаем <i>pull request</i>
4. Ждём ответа либо от робота, либо от меня

---

