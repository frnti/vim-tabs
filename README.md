Задание 1 - Табы
Форкнуть шаблон приложения (https://stackblitz.com/edit/vim8-1-tabs-template?file=app%2Fapp.component.html) и на его основе реализовать табы по указанной в app.component.html разметке (в отдельном модуле, в отдельном каталоге). И содержимое, и заголовок должны поддерживать отображение других компонентов/произвольного html. По умолчанию активен первый таб. Должна поддерживаться возможность динамически добавить/убрать таб. При удалении активного таба, активным становится первый таб (если остался хотя бы один). Для оформления табов достаточно использовать 3 класса из styles.css. Приложение должно работать без NO_ERRORS_SCHEMA/CUSTOM_ELEMENTS_SCHEMA в AppModule.
Изменять разметку app компонента можно только для решения бонусного задания
Bonus: Сделать так, чтобы содержимое табов инициализировалось только при активации таба.

Задание 2 - Структурная директива
Форкнуть шаблон приложения (https://stackblitz.com/edit/vim8-2-resize-template?file=app%2Fapp.component.html) и на его основе реализовать:
- модуль в отдельном каталоге, содержащий структурную директиву ifViewportSize, которая рендерит элемент, если ширина окна браузера соответствует переданному значения. Ширина браузера может изменяться после запуска приложения.
- сервис в том же модуле, который занимается определением текущей ширины окна браузера и должен получать на этапе инициализации конфиг с пороговыми значениями для разных типов ширины (нижнее значение, с которого начинается соответствующий тип)
- конфиг для сервиса должен передаваться через AppModule

Для тестирования раскомментировать разметку в app.component.html.

Обратить внимание на производительность (на странице могут быть сотни произвольных компонентов)
interface IConfig {
 medium: number;
 large: number;
}
small: viewportWidth < config.medium
medium: config.medium <= viewportWidth < config.large
large: config.large <= viewportWidth
