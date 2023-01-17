// Class definition

const $ = require('jquery');
// const { KTApp } = require('../components/app');
const { KTUtil } = require('../components/util');
require("../components/datatable/core.datatable.js");
// require('../bootstrap-select/bootstrap-select.min.js')

const ShowDropDownMenu = (id) => {
	$("#"+id).show();
}

const HOST_URL = "https://keenthemes.com/metronic/tools/preview";
const KTAppsEducationSchoolLibrary = function() {
	// Private functions

	// basic demo
	var _demo = function() {
		const dataJSONArray = [
			{
			"RecordID": 1,
			"OrderID": "64616-103",
			"Country": "Brazil",
			"ShipCountry": "BR",
			"ShipCity": "São Félix do Xingu",
			"ShipName": "Gerhold Inc",
			"ShipAddress": "698 Oriole Pass",
			"CompanyEmail": "hboule0@hp.com",
			"CompanyAgent": "Hayes Boule",
			"CompanyName": "Casper-Kerluke",
			"Currency": "BRL",
			"Notes": "vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus",
			"Department": "Shoes",
			"Website": "thetimes.co.uk",
			"Latitude": -7.0179497,
			"Longitude": -52.3613378,
			"ShipDate": "10/15/2017",
			"PaymentDate": "2016-07-28 03:44:46",
			"TimeZone": "America/Santarem",
			"TotalPayment": "$563997.38",
			"Gender": "M",
			"Status": 5,
			"Type": 1,
			"Actions": null
			},
			{
			"RecordID": 2,
			"OrderID": "54868-3377",
			"Country": "Vietnam",
			"ShipCountry": "VN",
			"ShipCity": "Bình Minh",
			"ShipName": "Schimmel, Raynor and Bechtelar",
			"ShipAddress": "8998 Delaware Court",
			"CompanyEmail": "hbresnen1@theguardian.com",
			"CompanyAgent": "Humbert Bresnen",
			"CompanyName": "Hodkiewicz and Sons",
			"Currency": "VND",
			"Notes": "ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi",
			"Department": "Kids",
			"Website": "webeden.co.uk",
			"Latitude": 10.029192,
			"Longitude": 105.8525154,
			"ShipDate": "4/24/2016",
			"PaymentDate": "2016-08-07 16:14:58",
			"TimeZone": "Asia/Ho_Chi_Minh",
			"TotalPayment": "$582935.03",
			"Gender": "M",
			"Status": 2,
			"Type": 2,
			"Actions": null
			},
			{
			"RecordID": 2,
			"OrderID": "54868-3377",
			"Country": "Vietnam",
			"ShipCountry": "VN",
			"ShipCity": "Bình Minh",
			"ShipName": "Schimmel, Raynor and Bechtelar",
			"ShipAddress": "8998 Delaware Court",
			"CompanyEmail": "hbresnen1@theguardian.com",
			"CompanyAgent": "Humbert Bresnen",
			"CompanyName": "Hodkiewicz and Sons",
			"Currency": "VND",
			"Notes": "ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi",
			"Department": "Kids",
			"Website": "webeden.co.uk",
			"Latitude": 10.029192,
			"Longitude": 105.8525154,
			"ShipDate": "4/24/2016",
			"PaymentDate": "2016-08-07 16:14:58",
			"TimeZone": "Asia/Ho_Chi_Minh",
			"TotalPayment": "$582935.03",
			"Gender": "M",
			"Status": 2,
			"Type": 2,
			"Actions": null
			}
		]
		var datatable = $('#kt_datatable').KTDatatable({
			// datasource definition
			data: {
				// type: 'remote',
				// source: {
				// 	read: {
				// 		url: HOST_URL + '/api/datatables/demos/default.php',
				// 	},
				// },
				type: 'local',
				source: dataJSONArray,
				// pageSize: 10, // display 20 records per page
				// serverPaging: true,
				// serverFiltering: true,
				// serverSorting: true,
			},

			// layout definition
			layout: {
				scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
				footer: false, // display/hide footer
			},

			// column sorting
			sortable: true,

			// enable pagination
			pagination: true,

			// columns definition
			columns: [
				{
					field: 'CompanyName',
					title: 'Book',
					width: 250,
					template: function(data) {
						var number = KTUtil.getRandomInt(1, 13);
						var img =  number + '.png';
						var output = '';

						var genreIndex = KTUtil.getRandomInt(1, 4);

						var genre = {
							1: {'title': 'Fiction'},
							2: {'title': 'Drama'},
							3: {'title': 'Classic'},
							4: {'title': 'Thriller'}
						};

            // <img class="" src="assets/media/books/' + img + '" alt="photo">
						output = `<div class="d-flex align-items-center">
							<div class="symbol symbol-40 symbol-sm flex-shrink-0">
								<img class="" src="https://img.kooora.com/?i=reuters%2f2021-01-14%2f2021-01-14t212758z_1434458759_up1eh1e1nmmx5_rtrmadp_3_soccer-spain-mad-atb-report_reuters.jpg&z=320|200&c=53|31|641|483&h=562" alt="photo">
							</div>
							<div class="ml-4">
								<a href="#" class="text-dark-75 text-hover-primary font-weight-bolder font-size-lg mb-0">${data.CompanyName}</a>
								<div class="text-muted font-weight-bold"> ${genre[genreIndex].title}</div>
							</div>
						</div>`;

						return output;
					}
				}, {
					field: 'CompanyAgent',
					title: 'Author',
					template: function(row) {
						var output = '';

						output += '<a href="#" class="text-dark-50 text-hover-primary font-weight-bold">' + row.CompanyAgent + '</a>';

						return output;
					}
				}, {
					field: 'IssueDate',
					title: 'Issued',
					type: 'date',
					width: 100,
					format: 'MM/DD/YYYY',
					template: function(row) {
						var output = '';

						var status = {
							1: {'title': 'New', 'class': ' label-light-primary'},
							2: {'title': 'Good', 'class': ' label-light-danger'},
							3: {'title': 'Demaged', 'class': ' label-light-primary'}
						};

						var index = KTUtil.getRandomInt(1, 3);

						output += '<div class="font-weight-bolder text-primary mb-0">' + row.ShipDate + '</div>';
						output += '<div class="text-muted">' + status[index].title + '</div>';

						return output;
					},
				}, {
					field: 'Status',
					title: 'Status',
					autoHide: false,
					width: 100,
					// callback function support for column rendering
					template: function(row) {
						var index = KTUtil.getRandomInt(1, 4);

						var status = {
							1: {'title': 'Available', 'class': ' label-light-primary'},
							2: {'title': 'In Use', 'class': ' label-light-danger'},
							3: {'title': 'No Stock', 'class': ' label-light-info'},
							4: {'title': 'Arriving', 'class': ' label-light-success'}
						};

						return '<span class="label label-lg font-weight-bold ' + status[index].class + ' label-inline">' + status[index].title + '</span>';
					},
				}, {
					field: 'Actions',
					title: 'Actions',
					sortable: false,
					width: 130,
					overflow: 'visible',
					autoHide: false,
					template: function(data) {
						return `
								<div class="dropdown dropdown-inline">
										<a href="javascript:;" class="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2" data-toggle="dropdown">
											<span class="svg-icon svg-icon-md">
												<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-icon">
													<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
														<rect x="0" y="0" width="24" height="24"/>
														<path d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z" fill="#000000"/>
														<path d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z" fill="#000000" opacity="0.3"/>
													</g>
												</svg>
											</span>
										</a>
										<div class="dropdown-menu dropdown-menu-sm dropdown-menu-right" id="${data.CompanyName}">
												<ul class="navi flex-column navi-hover py-2">
														<li class="navi-header font-weight-bolder text-uppercase font-size-xs text-primary pb-2">
																Choose an action:
														</li>
														<li class="navi-item">
																<a href="#" class="navi-link">
																		<span class="navi-icon"><i class="la la-print"></i></span>
																		<span class="navi-text">Print</span>
																</a>
														</li>
														<li class="navi-item">
																<a href="#" class="navi-link">
																		<span class="navi-icon"><i class="la la-copy"></i></span>
																		<span class="navi-text">Copy</span>
																</a>
														</li>
														<li class="navi-item">
																<a href="#" class="navi-link">
																		<span class="navi-icon"><i class="la la-file-excel-o"></i></span>
																		<span class="navi-text">Excel</span>
																</a>
														</li>
														<li class="navi-item">
																<a href="#" class="navi-link">
																		<span class="navi-icon"><i class="la la-file-text-o"></i></span>
																		<span class="navi-text">CSV</span>
																</a>
														</li>
														<li class="navi-item">
																<a href="#" class="navi-link">
																		<span class="navi-icon"><i class="la la-file-pdf-o"></i></span>
																		<span class="navi-text">PDF</span>
																</a>
														</li>
												</ul>
										</div>
								</div>
								<a href="javascript:;" class="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2" title="Edit details">
										<span class="svg-icon svg-icon-md">
											<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
												<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
													<rect x="0" y="0" width="24" height="24"/>
													<path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) "/>
													<path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"/>
												</g>
											</svg>
										</span>
								</a>
								<a href="javascript:;" class="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon" title="Delete">
									<span class="svg-icon svg-icon-md">
										<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
											<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
												<rect x="0" y="0" width="24" height="24"/>
												<path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fill-rule="nonzero"/>
												<path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3"/>
											</g>
										</svg>
									</span>
								</a>
								`;
					},
				}],
		});

		$('#kt_datatable_search_query').on('change', function() {
			datatable.search($(this).val().toLowerCase(), 'CompanyName');
		});

		// $('#kt_datatable_search_type').on('change', function() {
		// 	datatable.search($(this).val().toLowerCase(), 'Type');
		// });

		//$('#kt_datatable_search_status, #kt_datatable_search_type').selectpicker();
	};

	return {
		// public functions
		init: function() {
			_demo();
		},
	};
}();

// jQuery(document).ready(function() {
// 	KTAppsEducationSchoolLibrary.init();
// });

export default KTAppsEducationSchoolLibrary;
