"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomDateTime_1 = require("./CustomDateTime");
var SearchParam_1 = require("./SearchParam");
var ConditionCreator_1 = require("./ConditionCreator");
var DateCreator_1 = require("./DateCreator");
var searchParam = [];
var dt1 = {};
var dt2 = {};
var dt3 = {};
var dt4;
var dt5;
var dt6;
var dt7;
var dt8;
var isAndOperator = false;
var dateTime = [];
var searchMultiParam = [];
var objWhere;
var checkedItems = ['By Sea', 'By Land', 'By Foot'];
//const p_objSearchOperation = SearchOperation
//dt1 = new CustomDateTime('27/3/2012 04:37:20', CustomDateTime.FORMAT1);
//dt2 = new CustomDateTime('01/02/2019 04:37:20', CustomDateTime.FORMAT2);
var date = new Date(2017, 4, 4, 17, 23, 42, 11);
var date1 = new Date('Wed Oct 20 2021 05:30:00 GMT+0530 (IST)');
// let date1 = 'Thu May 04 2017 17:23:42 GMT+0530 (India Standard Time)'
console.log('date1', date);
console.log('date1', date1);
dt1 = new CustomDateTime_1.CustomDateTime(date);
dt3 = new CustomDateTime_1.CustomDateTime(date1);
dt2 = dt1.getDateobj();
dt4 = dt3.getDateobj();
console.log('dt4+++', dt4);
var sp1 = new SearchParam_1.SearchParam();
var sp2 = new SearchParam_1.SearchParam();
var sp3 = new SearchParam_1.SearchParam();
var sp4 = new SearchParam_1.SearchParam();
var sp5 = new SearchParam_1.SearchParam();
var sp6 = new SearchParam_1.SearchParam();
var sp7 = new SearchParam_1.SearchParam();
var sp8 = new SearchParam_1.SearchParam();
var sp9 = new SearchParam_1.SearchParam();
var sp10 = new SearchParam_1.SearchParam();
var sp11 = new SearchParam_1.SearchParam();
var sp12 = new SearchParam_1.SearchParam();
var sp13 = new SearchParam_1.SearchParam();
var sp14 = new SearchParam_1.SearchParam();
var sp15 = new SearchParam_1.SearchParam();
var sp16 = new SearchParam_1.SearchParam();
var sp17 = new SearchParam_1.SearchParam();
var sp18 = new SearchParam_1.SearchParam();
var sp19 = new SearchParam_1.SearchParam();
var sp20 = new SearchParam_1.SearchParam();
var sp21 = new SearchParam_1.SearchParam();
var sp22 = new SearchParam_1.SearchParam();
var sp23 = new SearchParam_1.SearchParam();
var sp24 = new SearchParam_1.SearchParam();
var sp100 = new SearchParam_1.SearchParam();
sp1.searchParamCreate('source_port_id', 'string', 'Dalma Airport', SearchParam_1.SearchOperationBuilder.create(true, false, false));
sp2.searchParamFrom('destination_port_id', 'string', 'Dubai Airport', isAndOperator);
sp3.searchParamFromTo("shmt_has_income_payment", "datetime", dt1.getDateobj(), dt3.getDateobj(), isAndOperator);
sp4.searchParamFrom("shmt_has_expense_payment", "string", 'true', isAndOperator);
sp100.searchParamCreate("shmt_id", "Int", 'Dubai Airport', SearchParam_1.SearchOperationBuilder.create(true, true, false), isAndOperator);
// sp100.searchParamCreator("shmt_id", "Int", 'Dubai Airport');
console.log('sp100sp100', sp100);
var custmdateObj = new DateCreator_1.DateCreator();
//console.log(DateCreator);
//
// let customDateObjTo = new CustomDateTime(DateCreator.startDate);
DateCreator_1.DateCreator.getDate(DateCreator_1.DateRange.ThisWeek);
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
sp11.searchParamFromTo("This Week", "datetime", new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.startDate), new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.endDate), isAndOperator);
DateCreator_1.DateCreator.getDate(DateCreator_1.DateRange.ThisMonth);
sp12.searchParamFromTo("This Month", "datetime", new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.startDate), new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.endDate), isAndOperator);
DateCreator_1.DateCreator.getDate(DateCreator_1.DateRange.ThisYear);
console.log(DateCreator_1.DateCreator.startDate);
console.log(DateCreator_1.DateCreator.endDate);
sp13.searchParamFromTo("This Year", "datetime", new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.startDate), new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.endDate), isAndOperator);
DateCreator_1.DateCreator.getDate(DateCreator_1.DateRange.Yesterday);
sp14.searchParamFromTo("Yesterday", "datetime", new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.startDate), new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.endDate), isAndOperator);
DateCreator_1.DateCreator.getDate(DateCreator_1.DateRange.LastWeek);
sp15.searchParamFromTo("Last Week", "datetime", new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.startDate), new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.endDate), isAndOperator);
DateCreator_1.DateCreator.getDate(DateCreator_1.DateRange.LastMonth);
sp16.searchParamFromTo("Last Month", "datetime", new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.startDate), new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.endDate), isAndOperator);
DateCreator_1.DateCreator.getDate(DateCreator_1.DateRange.LastYear);
sp17.searchParamFromTo("Last Year", "datetime", new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.startDate), new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.endDate), isAndOperator);
DateCreator_1.DateCreator.getDate(DateCreator_1.DateRange.NextWeek);
sp18.searchParamFromTo("Next Week", "datetime", new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.startDate), new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.endDate), isAndOperator);
DateCreator_1.DateCreator.getDate(DateCreator_1.DateRange.NextMonth);
sp19.searchParamFromTo("Next Month", "datetime", new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.startDate), new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.endDate), isAndOperator);
DateCreator_1.DateCreator.getDate(DateCreator_1.DateRange.NextYear);
sp20.searchParamFromTo("Next Year", "datetime", new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.startDate), new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.endDate), isAndOperator);
DateCreator_1.DateCreator.getDate(DateCreator_1.DateRange.Last7days);
sp21.searchParamFromTo("Last7Days", "datetime", new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.startDate), new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.endDate), isAndOperator);
DateCreator_1.DateCreator.getDate(DateCreator_1.DateRange.Last30Days);
sp22.searchParamFromTo("Last30Days", "datetime", new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.startDate), new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.endDate), isAndOperator);
DateCreator_1.DateCreator.getDate(DateCreator_1.DateRange.Today);
sp23.searchParamFromTo("Today", "datetime", new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.startDate), new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.endDate), isAndOperator);
console.log('date1', date1);
DateCreator_1.DateCreator.getDate(DateCreator_1.DateRange.Custom);
sp24.searchParamFromTo("Custom", "datetime", new CustomDateTime_1.CustomDateTime(new Date()), new CustomDateTime_1.CustomDateTime(date1), isAndOperator);
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
sp6.name = "ssta_id";
sp6.dataType = "Int";
checkedItems.forEach(function (objItem) {
    sp6.hasMultValueList.push(objItem);
    sp6.hasMultValue = true;
});
sp6.isAndOperator = true;
console.log('checkedItems', checkedItems);
console.log('sp6', sp6);
sp7.searchParamFrom('Shmt_Has_Chrg_at_Dest', "string", "Shipment has Charge at destination", isAndOperator);
sp8.searchParamFrom('Shmt_Has_Chrg_at_Src', "string", "Shipment has Charge at Source");
sp9.searchParamFrom('Shmt_Has_Unpaid_Invc_Dest', "string", "Shipment has Unpaid invoice at Destination", isAndOperator);
searchMultiParam.push(sp7, sp8, sp9);
sp10.hasMultiParam = true;
sp10.multiparams = searchMultiParam;
searchParam.push(sp1);
//        
var objCreator = new ConditionCreator_1.ConditionCreator();
console.log('searchParam', searchParam);
objWhere = objCreator.getSearchCondition(searchParam);
console.log('objWhere++++++++', JSON.stringify(objWhere.toJsonString()));
console.log('objWhere', objWhere.toJsonString());
//# sourceMappingURL=index.js.map