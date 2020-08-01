# React-native-calendarview-datepicker
![GitHub top language](https://img.shields.io/github/languages/top/RavisaraDev/react-native-calendarview-datepicker?color=yellow&style=flat-square) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/RavisaraDev/react-native-calendarview-datepicker?color=greenlabel=size&style=flat-square) ![GitHub All Releases](https://img.shields.io/github/downloads/RavisaraDev/react-native-calendarview-datepicker/total?color=%2300A3FF&logo=Github&style=flat-square) ![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/RavisaraDev/react-native-calendarview-datepicker?color=%23C678DD&label=version&style=flat-square) ![Hits](https://hitcounter.pythonanywhere.com/count/tag.svg?url=https%3A%2F%2Fgithub.com%2FRavisaraDev%2Freact-native-calendarview-datepicker)

![Encipher screenshot](./assets/banner.png?raw=true "Optional Title")

📦 Installation
----


```sh
npm i react-native-calendarview-datepicker
``` 
or

```sh
yarn add react-native-calendarview-datepicker
``` 

🚀 Basic Usage
----

You can simply add date-picker as follows. It shows minimal default calendar picker. But you can customize as you wish.
```javascript
import DatePickerCalendar from 'react-native-calendarview-datepicker';
import Moment from 'moment';

...

const App = () => {
  const [date, setDate] = useState(moment());

  return (
        <DatePickerCalendar date={date} onChange={(selectedDate) => setDate(selectedDate)}/>
  );
};
```

📑 API Reference
----

| Props| Type | Description 
| -------- | ------- | -------- |
| date | ```Moment``` | ```moment()``` Moment date object (Required)
| onChange |```Function```| Callback triggered on date select (Required)
| headerStyles | ```Object``` | Header wrapper styles
| customHeader | ```Function``` | Function should return a component. Args: ```(date, month, year, setMonth, setYear)```
| weekHeaderTextColor | ```String``` | Week days names text color
| selectedDateHighlightColor | ```String``` | Selected date highlight marker color
| selectedDateHighlightRadius | ```Number``` | Selected date highlight marker radius
| datesColor | ```String``` | Calendar date color
| selectedDateColor|  ```String``` | Selected calendar date color
| fieldButtonStylesDateFormat | ```String``` | Selected date showing format. [Available formats](https://momentjs.com/docs/#/parsing/string-format/)
| fieldButtonStyles | ```Object``` | Field button styles
| fieldButtonTextStyles | ```Object``` | Field button text styles


🗞 License
----

React-native-calendarview-datepicker is licensed under the [MIT License](/LICENSE)
