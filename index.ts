
import { CustomDateTime } from "./CustomDateTime";
import { SearchParam, SearchOperationBuilder } from "./SearchParam";
import { ConditionCreator } from "./ConditionCreator";
import { Where } from "./Where";
import { DateCreator, DateRange } from "./DateCreator";


let searchParam: any = [];
let dt1: any = {};
let dt2: any = {};
let dt3: any = {};
let dt4;
let dt5: any;
let dt6: any;
let dt7: any;
let dt8: any;


let dateTime: any = [];
let searchMultiParam: any = []
let objWhere: Where;
let checkedItems = ['By Sea', 'By Land', 'By Foot'];

//const p_objSearchOperation = SearchOperation
//dt1 = new CustomDateTime('27/3/2012 04:37:20', CustomDateTime.FORMAT1);
//dt2 = new CustomDateTime('01/02/2019 04:37:20', CustomDateTime.FORMAT2);

let date: Date = new Date(2017, 4, 4, 17, 23, 42, 11);
let date1: Date = new Date(2018, 12, 3, 17, 23, 42, 11);


console.log('date1', date1)
dt1 = new CustomDateTime(date);
dt3 = new CustomDateTime(date1);
dt2 = dt1.getDateobj();
dt4 = dt3.getDateobj();
console.log('dt4+++', dt4);

let sp1 = new SearchParam();
let sp2 = new SearchParam();
let sp3 = new SearchParam();
let sp4 = new SearchParam();
let sp5 = new SearchParam();
let sp6 = new SearchParam();
let sp7 = new SearchParam();
let sp8 = new SearchParam();
let sp9 = new SearchParam();
let sp10 = new SearchParam();
let sp11 = new SearchParam();
let sp12 = new SearchParam();
let sp13 = new SearchParam();
let sp14 = new SearchParam();
let sp15 = new SearchParam();
let sp16 = new SearchParam();
let sp17 = new SearchParam();
let sp18 = new SearchParam();
let sp19 = new SearchParam();
let sp20 = new SearchParam();
let sp21 = new SearchParam();
let sp22 = new SearchParam();
let sp23 = new SearchParam();
let sp24 = new SearchParam();


sp1.searchParamCreate('source_port_id', 'string', 'Dalma Airport', SearchOperationBuilder.create(true, false, false));
sp2.searchParamFrom('destination_port_id', 'string', 'Dubai Airport');
sp3.searchParamFromTo("shmt_has_income_payment", "datetime", dt1.getDateobj(), dt3.getDateobj());
sp4.searchParamFrom("shmt_has_expense_payment", "string", 'true');
sp5.searchParamCreate("shmt_id", "string", 'Dubai Airport', SearchOperationBuilder.create(true, true, false));
let custmdateObj = new DateCreator();
//console.log(DateCreator);
//
// let customDateObjTo = new CustomDateTime(DateCreator.startDate);

DateCreator.getDate(DateRange.ThisWeek);
// console.log(DateCreator.startDate);
// console.log(DateCreator.endDate);
// let obj = {
//     "year": 2020,
//     "month": 0,
//     "day": 17,
//     "hours": 0,
//     "minutes": 0,
//     "seconds": 0,
//     "milliSecond": 0
// };
// DateCreator.DateFormatter(obj);
sp11.searchParamFromTo("This Week", "datetime", new CustomDateTime(DateCreator.startDate), new CustomDateTime(DateCreator.endDate));

DateCreator.getDate(DateRange.ThisMonth);
sp12.searchParamFromTo("This Month", "datetime", new CustomDateTime(DateCreator.startDate), new CustomDateTime(DateCreator.endDate));

DateCreator.getDate(DateRange.ThisYear);
console.log(DateCreator.startDate);
console.log(DateCreator.endDate);
sp13.searchParamFromTo("This Year", "datetime", new CustomDateTime(DateCreator.startDate), new CustomDateTime(DateCreator.endDate));

DateCreator.getDate(DateRange.Yesterday);
sp14.searchParamFromTo("Yesterday", "datetime", new CustomDateTime(DateCreator.startDate), new CustomDateTime(DateCreator.endDate));

DateCreator.getDate(DateRange.LastWeek);
sp15.searchParamFromTo("Last Week", "datetime", new CustomDateTime(DateCreator.startDate), new CustomDateTime(DateCreator.endDate));

DateCreator.getDate(DateRange.LastMonth);
sp16.searchParamFromTo("Last Month", "datetime", new CustomDateTime(DateCreator.startDate), new CustomDateTime(DateCreator.endDate));

DateCreator.getDate(DateRange.LastYear);
sp17.searchParamFromTo("Last Year", "datetime", new CustomDateTime(DateCreator.startDate), new CustomDateTime(DateCreator.endDate));

DateCreator.getDate(DateRange.NextWeek);
sp18.searchParamFromTo("Next Week", "datetime", new CustomDateTime(DateCreator.startDate), new CustomDateTime(DateCreator.endDate));

DateCreator.getDate(DateRange.NextMonth);
sp19.searchParamFromTo("Next Month", "datetime", new CustomDateTime(DateCreator.startDate), new CustomDateTime(DateCreator.endDate));

DateCreator.getDate(DateRange.NextYear);
sp20.searchParamFromTo("Next Year", "datetime", new CustomDateTime(DateCreator.startDate), new CustomDateTime(DateCreator.endDate));

DateCreator.getDate(DateRange.Last7days);
sp21.searchParamFromTo("Last7Days", "datetime", new CustomDateTime(DateCreator.startDate), new CustomDateTime(DateCreator.endDate));

DateCreator.getDate(DateRange.Last30Days);
sp22.searchParamFromTo("Last30Days", "datetime", new CustomDateTime(DateCreator.startDate), new CustomDateTime(DateCreator.endDate));

DateCreator.getDate(DateRange.Today);
sp23.searchParamFromTo("Today", "datetime", new CustomDateTime(DateCreator.startDate), new CustomDateTime(DateCreator.endDate));


DateCreator.getDate(DateRange.Custom);
sp24.searchParamFromTo("Custom", "datetime", new CustomDateTime(new Date()), new CustomDateTime(new Date()));

// sp14.searchParamDate("This Week", "datetime", 'This Week');
// sp15.searchParamDate("This Month", "datetime", 'This Month');
// sp16.searchParamDate("This Year", "datetime", 'This Year');
// sp17.searchParamDate("Next Week", "datetime", 'Next Week');
// sp18.searchParamDate("Next Month", "datetime", 'Next Month');
// sp19.searchParamDate("Next Year", "datetime", 'Next Year');
// sp20.searchParamDate("Today", "datetime", 'Today');
// sp21.searchParamDate("Yesterday", "datetime", 'Yesterday');
// sp22.searchParamDate("Today", "datetime", 'Last 7 Days');
// sp23.searchParamDate("Yesterday", "datetime", 'Last 30 Days');

sp6.name = "ssta_id"
sp6.dataType = "string"
checkedItems.forEach(objItem => {
    sp6.hasMultValueList.push(objItem);
    sp6.hasMultValue = true;
});

sp7.searchParamFrom('Shmt_Has_Chrg_at_Dest', "string", "Shipment has Charge at destination");
sp8.searchParamFrom('Shmt_Has_Chrg_at_Src', "string", "Shipment has Charge at Source");
sp9.searchParamFrom('Shmt_Has_Unpaid_Invc_Dest', "string", "Shipment has Unpaid invoice at Destination");

searchMultiParam.push(sp7, sp8, sp9);
sp10.hasMultiParam = true;
sp10.multiparams = searchMultiParam;

searchParam.push(
    sp23, sp22, sp21, sp20, sp19, sp18, sp17, sp16, sp15, sp14, sp13, sp12, sp11, sp1, sp2, sp3, sp4, sp5, sp6, sp24
);
//        
let objCreator = new ConditionCreator();
objWhere = objCreator.getSearchCondition(searchParam);
console.log('objWhere++++++++', JSON.stringify(objWhere.toJsonString()));
console.log('objWhere', objWhere.toJsonString());













