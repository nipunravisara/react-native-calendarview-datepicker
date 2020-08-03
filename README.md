# React-native-calendarview-datepicker
![GitHub top language](https://img.shields.io/github/languages/top/RavisaraDev/react-native-calendarview-datepicker?color=yellow&style=flat-square) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/RavisaraDev/react-native-calendarview-datepicker?color=greenlabel=size&style=flat-square)  ![npm](https://img.shields.io/npm/dw/react-native-calendarview-datepicker?label=npm%20downloads&logo=npm&style=flat-square) ![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/RavisaraDev/react-native-calendarview-datepicker?color=%23C678DD&label=version&style=flat-square&logo=npm&) ![Hits](https://hitcounter.pythonanywhere.com/count/tag.svg?url=https%3A%2F%2Fgithub.com%2FRavisaraDev%2Freact-native-calendarview-datepicker)
![banner-image](./assets/banner.png?raw=true "Optional Title")

📦 Installation
----


```sh
npm i react-native-calendarview-datepicker
``` 
or

```sh
yarn add react-native-calendarview-datepicker
``` 

📺 Preview
----

![banner-image](./assets/preview-default.gif?raw=true "Optional Title") ![banner-image](./assets/preview-customized.gif?raw=true "Optional Title")


🚀 Basic Usage
----

### Default

You can simply add date-picker as follows. It shows minimal default calendar. But you can customize as you wish.
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

### Customized

You can have full control of calendar picker. Pass your own calendar header and condition styles for darkmode.
```javascript
import DatePickerCalendar from 'react-native-calendarview-datepicker';
import Moment from 'moment';

...

const App = () => {
  const [date, setDate] = useState(moment());
  
  //Custom datepicker header
const customHeader = (date, month, year, setMonth, setYear) => {
    return (
        <View style={{flexDirection: "row", justifyContent: 'space-between'}}>
            <View>
                <View>
                    <Text style={{color: "#fff", fontSize: 18, opacity: 0.5, marginBottom: 4}}>{year}</Text>
                </View>
                <View>
                    <Text style={{
                        color: "#fff",
                        fontSize: 25,
                        fontWeight: 'bold'
                    }}>{moment(date).format("MMMM Do YYYY")}</Text>
                </View>
            </View>
            <View style={{flexDirection: "row", alignItems: 'center'}}>
                <TouchableOpacity style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 10,
                    height: 40,
                    width: 40,
                    backgroundColor: "#155B3C",
                    borderRadius: 100
                }} onPress={() => setMonth(month - 1)}>
                    <Text style={{color: "#18D183", fontSize: 30, marginBottom: 5}}>{'‹'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 40,
                    width: 40,
                    backgroundColor: "#155B3C",
                    borderRadius: 100
                }} onPress={() => setMonth(month + 1)}>
                    <Text style={{color: "#18D183", fontSize: 30, marginBottom: 5}}>{'›'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

  return (
        <DatePickerCalendar
            date={date}
            onChange={(selectedDate) => setDate(selectedDate)}
            placeholder="Select date"
            placeholderStyles={{color: "#04e37d"}}
            fieldButtonStylesDateFormat="MMM Do YY"
            fieldButtonStyles={{width: '95%', backgroundColor: "#1D323E", borderRadius: 12, borderWidth: 2, borderColor: "#18D183", paddingLeft: 20}}
            fieldButtonTextStyles={{color: "#18D183"}}
            modalBackgroundColor={"#1D323E"}
            weekHeaderTextColor={"#18D183"}
            datesColor={"#fff"}
            selectedDateColor={"#1D323E"}
            selectedDateHighlightColor={"#18D183"}
            selectedDateHighlightRadius={5}
            customHeader={(date, month, year, setMonth, setYear) => customHeader(date, month, year, setMonth, setYear)}
            headerStyles={{padding: 0}}
        />
  );
};
```


📑 API Reference
----

| Props| Type | Description 
| -------- | ------- | -------- |
| date | ```Moment``` | If your need to show placeholder on initial load just pass ```undefined```, else for default value pass ```moment()``` object
| onChange |```Function```| Callback triggered on date select (Required)
| placeholder | ```String``` | Custom placeholder text
| placeholderStyles | ```Object``` | Placeholder text styles 
| modalBackgroundColor | ```String``` | Calendar modal background color
| headerStyles | ```Object``` | Header wrapper styles
| customHeader | ```Function``` | Function should return a component. Args: ```(date, month, year, setMonth, setYear)```
| weekHeaderTextColor | ```String``` | Week days names text color
| selectedDateHighlightColor | ```String``` | Selected date highlight marker color
| selectedDateHighlightRadius | ```Number``` | Selected date highlight marker radius
| datesColor | ```String``` | Calendar date color
| selectedDateColor|  ```String``` | Selected calendar date color
| fieldButtonStylesDateFormat | ```String``` | Selected date showing format. [Available formats](https://momentjs.com/docs/#/displaying/format/)
| fieldButtonStyles | ```Object``` | Field button styles
| fieldButtonTextStyles | ```Object``` | Field button text styles


🗞 License
----

React-native-calendarview-datepicker is licensed under the [MIT License](/LICENSE)
