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
var dateTime = [];
var searchMultiParam = [];
var objWhere;
var checkedItems = ['By Sea', 'By Land', 'By Foot'];
//const p_objSearchOperation = SearchOperation
//dt1 = new CustomDateTime('27/3/2012 04:37:20', CustomDateTime.FORMAT1);
//dt2 = new CustomDateTime('01/02/2019 04:37:20', CustomDateTime.FORMAT2);
var date = new Date(2017, 4, 4, 17, 23, 42, 11);
var date1 = new Date(2018, 12, 3, 17, 23, 42, 11);
console.log('date1', date1);
dt1 = new CustomDateTime_1.CustomDateTime(date);
dt3 = new CustomDateTime_1.CustomDateTime(date1);
dt2 = dt1.getDateobj();
dt4 = dt3.getDateobj();
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
sp1.searchParamCreate('source_port_id', 'string', 'Dalma Airport', SearchParam_1.SearchOperationBuilder.create(true, false, false));
sp2.searchParamFrom('destination_port_id', 'string', 'Dubai Airport');
sp3.searchParamFromTo("shmt_has_income_payment", "datetime", dt1.getDateobj(), dt3.getDateobj());
sp4.searchParamFrom("shmt_has_expense_payment", "string", 'true');
sp5.searchParamCreate("shmt_id", "string", 'Dubai Airport', SearchParam_1.SearchOperationBuilder.create(true, true, false));
var custmdateObj = new DateCreator_1.DateCreator();
//console.log(DateCreator);
//
// let customDateObjTo = new CustomDateTime(DateCreator.startDate);
DateCreator_1.DateCreator.getDate(2);
console.log(DateCreator_1.DateCreator.startDate);
console.log(DateCreator_1.DateCreator.endDate);
var obj = {
    "year": 2020,
    "month": 0,
    "day": 17,
    "hours": 0,
    "minutes": 0,
    "seconds": 0,
    "milliSecond": 0
};
DateCreator_1.DateCreator.DateFormatter(obj);
sp11.searchParamFromTo("This Week", "datetime", new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.startDate), new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.endDate));
DateCreator_1.DateCreator.getDate(3);
console.log(DateCreator_1.DateCreator.startDate);
console.log(DateCreator_1.DateCreator.endDate);
sp12.searchParamFromTo("This Month", "datetime", new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.startDate), new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.endDate));
DateCreator_1.DateCreator.getDate(4);
console.log(DateCreator_1.DateCreator.startDate);
console.log(DateCreator_1.DateCreator.endDate);
sp13.searchParamFromTo("This Year", "datetime", new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.startDate), new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.endDate));
DateCreator_1.DateCreator.getDate(5);
sp14.searchParamFromTo("Yesterday", "datetime", new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.startDate), new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.endDate));
DateCreator_1.DateCreator.getDate(6);
sp15.searchParamFromTo("Last Week", "datetime", new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.startDate), new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.endDate));
DateCreator_1.DateCreator.getDate(7);
sp16.searchParamFromTo("Last Month", "datetime", new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.startDate), new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.endDate));
DateCreator_1.DateCreator.getDate(8);
sp17.searchParamFromTo("Last Year", "datetime", new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.startDate), new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.endDate));
DateCreator_1.DateCreator.getDate(9);
sp18.searchParamFromTo("Next Week", "datetime", new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.startDate), new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.endDate));
DateCreator_1.DateCreator.getDate(10);
sp19.searchParamFromTo("Next Month", "datetime", new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.startDate), new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.endDate));
DateCreator_1.DateCreator.getDate(11);
sp20.searchParamFromTo("Next Year", "datetime", new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.startDate), new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.endDate));
DateCreator_1.DateCreator.getDate(12);
sp21.searchParamFromTo("Last7Days", "datetime", new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.startDate), new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.endDate));
DateCreator_1.DateCreator.getDate(13);
sp22.searchParamFromTo("Last30Days", "datetime", new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.startDate), new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.endDate));
DateCreator_1.DateCreator.getDate(0);
sp23.searchParamFromTo("Today", "datetime", new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.startDate), new CustomDateTime_1.CustomDateTime(DateCreator_1.DateCreator.endDate));
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
checkedItems.forEach(function (objItem) {
    sp6.hasMultValueList.push(objItem);
    sp6.hasMultValue = true;
});
sp7.searchParamFrom('Shmt_Has_Chrg_at_Dest', "string", "Shipment has Charge at destination");
sp8.searchParamFrom('Shmt_Has_Chrg_at_Src', "string", "Shipment has Charge at Source");
sp9.searchParamFrom('Shmt_Has_Unpaid_Invc_Dest', "string", "Shipment has Unpaid invoice at Destination");
searchMultiParam.push(sp7, sp8, sp9);
sp10.hasMultiParam = true;
sp10.multiparams = searchMultiParam;
searchParam.push(sp23, sp22, sp21, sp20, sp19, sp18, sp17, sp16, sp15, sp14, sp13, sp12, sp11, sp10, sp1, sp2, sp3, sp4, sp5, sp6);
//        
var objCreator = new ConditionCreator_1.ConditionCreator();
objWhere = objCreator.getSearchCondition(searchParam);
//console.log('objWhere+++++++++++++', objWhere);
console.log('objWhere', objWhere.toJsonString());
//# sourceMappingURL=index.js.map