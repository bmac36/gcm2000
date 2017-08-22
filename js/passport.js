// JavaScript Document


var orgUnitId;
var topicId;
var studentRoleId = 103;
var fieldId;
var fieldName;
var userIds = [];
var myId = -1;
var myVal = {
	"UserDisplay": "",
	"StudentNumber": "",
	"UserID": -1,
	"PassportID": -1,
	"PassportReflections": []
};

var refreshnum = 0;
var getDemoDataDone = false;
var getUserDataDone = false;
var getDiscussionDataDone = false;
var getUserDetailsDone = false;
var passportData = [];
var studentview = false;

var url = window.location.href;
var contentURL = window.top.location.href;
var contentParts = contentURL.split("/");
if (contentURL.indexOf("/m/") > -1) {
	orgUnitId = contentParts[7];
	topicId = contentParts[10];
} else {
	orgUnitId = contentParts[6];
	topicId = contentParts[8];
}
if (orgUnitId == undefined) {
	orgUnitId = parent.ouID;
}

CSVal.routes.get_demographics_all = '/d2l/api/lp/' + APIVersion + '/demographics/orgUnits/' + orgUnitId + '/users/';
CSVal.routes.get_users = '/d2l/api/lp/' + APIVersion + '/enrollments/orgUnits/' + orgUnitId + '/users/';
CSVal.routes.get_demographics_user = '/d2l/api/lp/' + APIVersion + '/demographics/users/';
CSVal.routes.put_demographics = '/d2l/api/lp/' + APIVersion + '/demographics/users/';
CSVal.routes.get_demographics_fields = '/d2l/api/lp/' + APIVersion + '/demographics/fields/';
CSVal.routes.get_demographics_datatypes = '/d2l/api/lp/' + APIVersion + '/demographics/dataTypes/';

CSVal.routes.get_dropbox_folders = '/d2l/api/le/' + APIVersion + '/ORGID/dropbox/folders/';
CSVal.routes.get_db_submissions = '/d2l/api/le/' + APIVersion + '/ORGID/dropbox/folders/FOLDERID/submissions/';
CSVal.routes.get_user_details = '/d2l/api/lp/' + APIVersion + '/enrollments/users/USERID/orgUnits/' + orgUnitId;

CSVal.routes.delete_user_entries = '/d2l/api/lp/' + APIVersion + '/demographics/users/USERID';

CSVal.routes.get_forums = '/d2l/api/le/' + APIVersion + '/ORGID/discussions/forums/';
CSVal.routes.get_topics = '/d2l/api/le/' + APIVersion + '/ORGID/discussions/forums/FORUMID/topics/';
CSVal.routes.get_posts = '/d2l/api/le/' + APIVersion + '/ORGID/discussions/forums/FORUMID/topics/TOPICID/posts/';
CSVal.routes.post_post = '/d2l/api/le/' + APIVersion + '/ORGID/discussions/forums/FORUMID/topics/TOPICID/posts/';
CSVal.routes.update_post = '/d2l/api/le/' + APIVersion + '/ORGID/discussions/forums/FORUMID/topics/TOPICID/posts/POSTID';


CSVal.devMode = false;
var appdata;

var demographicAllIndex = 0;

var userID;
var valJSON = {
	"UserDisplay": "",
	"StudentNumber": "",
	"UserID": "",
	"PassportID": -1,
	"PassportReflections": []
};
var valString = JSON.stringify(valJSON);
var demographicsData = {
	EntryValues: [{
		FieldId: "1000001",
		Name: "COMP1347-Challenge-001",
		Values: [valString]
	}]
};

var newFieldData = {
	"Name": "COMP1347-Challenge-001",
	"Description": "COMP1347 Challenge 1 User Data",
	"DataTypeId": "68663035-9f8b-452f-b472-2fb16e21ca30"
};

CSVal.demographics = CSVal.demographics || {};
CSVal.demographics.get_all = CSVal.demographics.get_all || {};
CSVal.demographics.get_user = CSVal.demographics.get_user || {};
CSVal.demographics.put_demographics = CSVal.demographics.put_demographics || {};
CSVal.demographics.fields = CSVal.demographics.fields || {};
CSVal.demographics.datatypes = CSVal.demographics.datatypes || {};


CSVal.delete_user_entries = function (uID) {
	var route = CSVal.routes.delete_user_entries.replace('USERID', uID);
	//route += '?entries="'+appdata.Demographics.FieldId+'"';
	//console.log(route);
	valence_req
		.delete(route)
		.use(valence_auth)
		.end(function (err, response) {
			if (err != null) {

			} else {
				//console.log(response);
				//pubsubz.publish('csval/delete_user_entries/'+uID, response.body);
			}
		});
};


CSVal.get_user_details = function (uID) {
	var route = CSVal.routes.get_user_details.replace("USERID", uID);
	valence_req
		.get(route)
		.use(valence_auth)
		.end(function (err, response) {
			if (err != null) {
			} else {
				
				CSVal.user.RoleId = response.body.RoleId;
				pubsubz.publish('csval/get_user_details/' + uID, response.body);
			}
			if (CSVal.devMode == true) {
				console.log(CSVal.user.RoleId);
			}
		});
};


/*
	CSVal.post_demographics_fields
	- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/
CSVal.post_demographics_fields = function (fieldData) {
	console.log(fieldData);
	valence_req
		.post(CSVal.routes.get_demographics_fields)
		.send(fieldData)
		.use(valence_auth)
		.end(function (err, response) {
			if (err != null) {
				//errorPrompt(err, CSVal.routes.get_demographics_fields, "alert");
				CSVal.t_profile.lock = false;
			} else {
				pubsubz.publish('csval/post_demographics_fields', response.body);
			}
			if (CSVal.devMode == true) {
				console.log(response.body);
			}
		});
};

/*
	CSVal.get_demographics_fields
	- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	- Return response body
*/
CSVal.get_demographics_fields = function () {
	valence_req
		.get(CSVal.routes.get_demographics_fields)
		.use(valence_auth)
		.end(function (err, response) {
			if (err != null) {
				//errorPrompt(err, CSVal.routes.get_demographics_fields, "alert");
				CSVal.t_profile.lock = false;
			} else {
				CSVal.demographics.fields = response.body;
				pubsubz.publish('csval/get_demographics_fields', response.body);
			}
			if (CSVal.devMode == true) {
				console.log(CSVal.demographics.fields);
			}
		});
};



/*
	CSVal.get_demographics_datatypes
	- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	- Return response body
*/
CSVal.get_demographics_datatypes = function (bookmark) {
	valence_req
		.get(CSVal.routes.get_demographics_datatypes)
		.use(valence_auth)
		.end(function (err, response) {
			if (err != null) {
				//errorPrompt(err, CSVal.routes.get_demographics_datatypes, "alert");
				CSVal.t_profile.lock = false;
			} else {
				CSVal.demographics.datatypes = response.body;
				pubsubz.publish('csval/get_demographics_datatypes', response.body);
			}
			if (CSVal.devMode == true) {
				console.log(CSVal.demographics.datatypes);
			}
		});
};


/*
	CSVal.get_demographics_all
	- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	- Return response body to subscribers
*/
CSVal.get_demographics_all = function (bookmark) {
	var route = CSVal.routes.get_demographics_all + '?bookmark=' + bookmark;
	/*
	   if(userIds.length > 0) {
		   var userlist = "";
		   for(var u=0; u<userIds.length; u++) {
		      userlist += userIds[u];
			  if(u !== (userIds.length-1)) {
					userlist += ","  
			  }
		   }
		   route += "&userIds=" + userlist;
	   }
	*/

	if (fieldId > 0) {
		route += "?fieldIds=" + fieldId;
	}
	valence_req
		.get(route)
		.use(valence_auth)
		.end(function (err, response) {
			if (err != null) {
				//errorPrompt(err, CSVal.routes.get_demographics_all, "alert");
				CSVal.t_profile.lock = false;
			} else {
				CSVal.demographics.get_all = response.body;
				pubsubz.publish('csval/get_demographics_all', response.body);
			}
			if (CSVal.devMode == true) {
				console.log(CSVal.demographics.get_all);
			}
		});
};


/*
	CSVal.get_demographics_user
	- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	- Return response body to subscribers
*/
CSVal.get_demographics_user = function (userID) {
	var route = CSVal.routes.get_demographics_user + userID;

	valence_req
		.get(route)
		.use(valence_auth)
		.end(function (err, response) {
			if (err != null) {
				CSVal.t_profile.lock = false;
				if (response.statusCode === 404) {
					CSVal.demographics.get_user = {
						"newUser": true
					};
					pubsubz.publish('csval/get_demographics_user/' + userID + "-" + refreshnum, {
						"newUser": true
					});
					refreshnum++;
				}
			} else {
				CSVal.demographics.get_user = response.body;
				pubsubz.publish('csval/get_demographics_user/' + userID + "-" + refreshnum, response.body);
				refreshnum++;
			}
			if (CSVal.devMode == true) {
				console.log(CSVal.demographics.get_user);
			}
		});
};


/*
	CSVal.get_demographics_user
	- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	- Return response body to subscribers
*/
CSVal.get_demographics_alluser = function (filter) {
	valence_req
		.get(CSVal.routes.get_demographics_user)
		.use(valence_auth)
		.end(function (err, response) {
			if (err != null) {
				CSVal.t_profile.lock = false;
				if (response.statusCode === 404) {
					CSVal.demographics.get_user = {
						"newUser": true
					};
					pubsubz.publish('csval/get_demographics_user/' + userID + "-" + refreshnum, {
						"newUser": true
					});
					refreshnum++;
				}
			} else {
				//CSVal.demographics.get_user = response.body;
				pubsubz.publish('csval/get_demographics_user/' + userID + "-" + refreshnum, response.body);
				refreshnum++;
			}
			if (CSVal.devMode == true) {
				console.log(CSVal.demographics.get_user);
			}
		});
};



/*
	CSVal.put_demographics
	- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	- Return response body to subscribers
*/
CSVal.put_demographics = function (UserID, demographicsData) {
	if (demographicsData == undefined) {
		if (CSVal.t_profile.lock !== false) {
			console.info('CSVal.put_demographics was called while a previous demographics request is still being processed');
			return false;
		}
		CSVal.t_profile.lock = true;
	} else {
		if (demographicsData == undefined) {
			return false;
		}
	}

	console.log(demographicsData);
	valence_req
		.put(CSVal.routes.put_demographics + UserID)
		.send(demographicsData)
		.use(valence_auth)
		.end(function (err, response) {
			if (err != null) {
				errorPrompt(err, CSVal.routes.put_demographics, "alert");
				return false;
			} else {
				CSVal.demographics.put_demographics = response.body;
				console.log(response);
				passportData = [];
				$('#dbox tbody').html('');
				CSVal.get_demographics_all();
				pubsubz.publish('csval/put_demographics', response.body);
			}
		});
};



var CSVal, pubsubz, valence_req, valence_auth, errorPrompt;
var DiscTitle = ["Passport Reflections"];
var DiscTitleIndex = -1;
var DiscussForID = -1;
var DiscussTopID = -1;

var FeedbackOptions = [];
var FeedbackSelected = -1;

var numTopicPostsChecked = 0;

CSVal.post_post = function(ForID, TopID, postObj) {

   var newroute = CSVal.routes.post_post;
   newroute = newroute.replace("ORGID", CSVal.context.ouID);
   newroute = newroute.replace("TOPICID", TopID);
   newroute = newroute.replace("FORUMID", ForID);

   valence_req
      .post(newroute)
      .send(postObj)
      .use(valence_auth)
      .end(function(err, response) {
         if (err !== null) {
            errorPrompt(err, newroute, "alert");
            return false;
         } else {

            for (var f = 0; f < FeedbackOptions.length; f++) {
               if (ForID === FeedbackOptions[f].ForumId) {
                  if (TopID === FeedbackOptions[f].TopicId) {
                     FeedbackOptions[f].MyPosts.push(response.body);
                  }
               }
            }

            setTimeout(function() {
               $("#feedbackconfirm").html("Saved: " + processDate(response.body.DatePosted));
               submitInit();
               $("#feedbacksubmit").removeClass("disabled");
            }, 2000);
         }
      });
};

CSVal.update_post = function(ForID, TopID, PostID, postObj) {

   var newroute = CSVal.routes.update_post;
   newroute = newroute.replace("ORGID", CSVal.context.ouID);
   newroute = newroute.replace("TOPICID", TopID);
   newroute = newroute.replace("FORUMID", ForID);
   newroute = newroute.replace("POSTID", PostID);

   valence_req
      .put(newroute)
      .send(postObj)
      .use(valence_auth)
      .end(function(err) {
         if (err !== null) {
            errorPrompt(err, newroute, "alert");
            return false;
         } else {
            setTimeout(function() {
               var today = new Date();
               $("#feedbackconfirm").html("Saved: " + processDate(today));
               submitInit();
               $("#feedbacksubmit").removeClass("disabled");
            }, 2000);
         }
      });
};



/*
	CSVal.get_users
	- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	- Add results to CSVal.user object
*/
CSVal.get_users = function (roleId) {
	var route = CSVal.routes.get_users.replace("ORGID", CSVal.context.ouID);
	if (roleId !== undefined) {
		route += "?roleId=" + roleId;
	}
	valence_req
		.get(route)
		.use(valence_auth)
		.end(function (err, response) {
			if (err != null) {
				//errorPrompt(err, CSVal.routes.get_users, "alert");
				return false;
			} else {
				CSVal.user.classlist = response.body;
				pubsubz.publish('csval/get_users');
				if (CSVal.devMode == true) {}
			}
		});
};



function updatepassportData() {

	var newEntry = {
		FieldId: fieldId,
		Name: fieldName,
		Values: [JSON.stringify(myVal)]
	};

	pubsubz.subscribe('csval/get_demographics_user/' + myId + "-" + refreshnum, function (result) {
		var newDemoData;
		if (result.newUser) {
			newDemoData = {
				"EntryValues": [newEntry],
				"UserId": parseInt(myId)
			}
		} else {

			newDemoData = result;
			var fieldfound = false;
			for (var j = 0; j < newDemoData.EntryValues.length; j++) {

				if (newDemoData.EntryValues[j].FieldId == fieldId) {
					fieldfound = true;

					var valuefound = false;
					for (var k = 0; k < newDemoData.EntryValues[j].Values.length; k++) {
						var tempdata = JSON.parse(newDemoData.EntryValues[j].Values[k]);
						if (tempdata.PassportID == appdata.PassportID) {
							valuefound = true;
							newDemoData.EntryValues[j].Values[k] = JSON.stringify(myVal);
						}
					}

					if (!valuefound) {
						newDemoData.EntryValues[j].Values.push(JSON.stringify(myVal));
					}

				}
			}

			if (!fieldfound) {
				newDemoData.EntryValues.push(newEntry);
			}

		}
		
		console.log(newDemoData);
		CSVal.put_demographics(myId, newDemoData);

	});

	//CSVal.get_demographics_alluser();
	CSVal.get_demographics_user(myId);
}


function resetchallengeConfirm(row, uID, uName) {
	
	var offsettop = $("#row-"+row).offset().top - 60;
	if(offsettop < 120) {
		offsettop = 120;
	}
	
	$("#challengeModal .modal-dialog").css("top", offsettop+"px");
	
	$("#resetstudentname").text(uName);
	
	$("#btn-resetconfirm").attr("onClick","resetpassportData("+uID+")")
	$('#challengeModal').modal('show');

}


function resetpassportData(uID) {

	$('#challengeModal').modal('hide');
	$("#btn-resetconfirm").removeAttr("onClick");
	
	dtable.destroy();
	pubsubz.subscribe('csval/get_demographics_user/' + uID + "-" + refreshnum, function (result) {

		if(!result.newUser) {
			newDemoData = result;
			var fieldfound = false;
			var fieldindex = -1;
			var valuefound = false;
			var valueindex = -1;

			for (var j = 0; j < newDemoData.EntryValues.length; j++) {

				if (newDemoData.EntryValues[j].FieldId == fieldId) {
						fieldfound = true;
						fieldindex = j;

						for (var k = 0; k < newDemoData.EntryValues[j].Values.length; k++) {
							var tempdata = JSON.parse(newDemoData.EntryValues[j].Values[k]);
							if (tempdata.PassportID == appdata.PassportID) {
								valuefound = true;
								valueindex = k;
							}
						}

						if (!valuefound) {
							newDemoData.EntryValues[j].Values.push(JSON.stringify(myVal));
						}
				}
			}

			if (fieldfound && valuefound) {
				newDemoData.EntryValues[fieldindex].Values.splice(valueindex,1);
			}

			CSVal.put_demographics(uID, newDemoData);
		}
		else {
			passportData = [];
			$('#dbox tbody').html('');
			CSVal.get_demographics_all();			
		}


	});

	//CSVal.get_demographics_alluser();
	CSVal.get_demographics_user(uID);
}



$(document).ready(function () {
	$.getJSON(datafile, function (data) {
		appdata = data;
		console.log(appdata);
		
		fieldId = appdata.Demographics.FieldId;
		fieldName = appdata.Demographics.FieldName;
		
		myVal.PassportID = appdata.PassportID;
		
		CSVal.init();
		
		
	});
});

var totalrows = 0;
var currentrow = 0;
		
var forumindex = -1;
var topicindex = -1;

var MyPosts = [];

function passInit() {
	
	if (getUserDataDone && getDemoDataDone && getUserDetailsDone && getDiscussionDataDone) {	

		var mydataindex = -1;
		var myvalueindex = -1;		
		
		for (var u = 0; u < CSVal.user.classlist.Items.length; u++) {
			var userdatavalue = {
				"UserDisplay": CSVal.user.classlist.Items[u].User.DisplayName,
				"StudentNumber": CSVal.user.classlist.Items[u].User.OrgDefinedId,
				"UserID": CSVal.user.classlist.Items[u].User.Identifier,
				"PassportID": appdata.PassportID,
				"PassportReflections": []
			};
			
			console.log(CSVal.demographics.get_all.Items);
			for (var i = 0; i < CSVal.demographics.get_all.Items.length; i++) {
				if (CSVal.demographics.get_all.Items[i].UserId == parseInt(CSVal.user.classlist.Items[u].User.Identifier)) {
					for (var j = 0; j < CSVal.demographics.get_all.Items[i].EntryValues.length; j++) {
						if (appdata.Demographics.FieldId == CSVal.demographics.get_all.Items[i].EntryValues[j].FieldId) {
							for (var k = 0; k < CSVal.demographics.get_all.Items[i].EntryValues[j].Values.length; k++) {
								var tempdata;
								console.log(CSVal.demographics.get_all.Items[i].EntryValues[j].Values[k]);
								try {
									tempdata = JSON.parse(CSVal.demographics.get_all.Items[i].EntryValues[j].Values[k]);
									console.log(tempdata);
									if(tempdata.PassportID == appdata.PassportID) {
										console.log("in");
										userdatavalue = tempdata;
										if (CSVal.demographics.get_all.Items[i].UserId == parseInt(myId)) {
											mydataindex = i;
											myvalueindex = k;
										}										
									}

								} catch (e) {
									console.log(e);
									// error in the above string (in this case, yes)!
								}
							}
						}
					}
				}
			}
			passportData.push(userdatavalue);
			
		}

		if (mydataindex > -1 && myvalueindex > -1) {
			for (var j = 0; j < CSVal.demographics.get_all.Items[mydataindex].EntryValues.length; j++) {
				if (CSVal.demographics.get_all.Items[mydataindex].EntryValues[j].FieldId == appdata.Demographics.FieldId) {
					myVal = JSON.parse(CSVal.demographics.get_all.Items[mydataindex].EntryValues[j].Values[myvalueindex]);
				}
			}
		}

		myVal.UserID = myId;
		myVal.UserDisplay = CSVal.user.FirstName + " " + CSVal.user.LastName;
		
		console.log(myVal);
		console.log(CSVal.disc);


	   for (var i = 0; i < CSVal.disc.Forums.length; i++) {
		   for(var d=0; d<DiscTitle.length; d++) {
			   if(CSVal.disc.Forums[i].Name === DiscTitle[d]) {
					DiscTitleIndex = d;
			   }

		   }
		  if(DiscTitleIndex > -1) {
			 forumindex = i;
			 DiscussForID = CSVal.disc.Forums[i].ForumId;
			 
				 for (var j = 0; j < CSVal.disc.Forums[i].Topics.length; j++) {
					 for(var p=0; p<appdata.PassportItems.length; p++) {
						
						 
						if (CSVal.disc.Forums[i].Topics[j].Name === appdata.PassportItems[p].Title) {
							
						   topicindex = j;
						   pubsubz.subscribe('csval/get_posts/' + DiscussForID + '/' + CSVal.disc.Forums[i].Topics[j].TopicId, function(ReturnObj) {
							  numTopicPostsChecked += 1;
							  
							 MyPosts = [];
							   console.log(ReturnObj);
							   var mindex = -1;
							   
							   if(ReturnObj.PostsObj.length > 0) {
								   var test = $($.parseHTML(ReturnObj.PostsObj[0].Message.Html));

								   for (var i = 0; i < CSVal.disc.Forums.length; i++) {
										 for (var j = 0; j < CSVal.disc.Forums[i].Topics.length; j++) {				
											 if(CSVal.disc.Forums[i].Topics[j].TopicId == ReturnObj.TopicId) {
												 for(var m=0; m<myVal.PassportReflections.length; m++) {
													if(myVal.PassportReflections[m].ItemTitle == CSVal.disc.Forums[i].Topics[j].Name) {
														mindex = m;
													}
												 }
											 }
										 }
								   }
							   }

							   
							   console.log(mindex);

						   });							
							 CSVal.get_posts(DiscussForID, CSVal.disc.Forums[i].Topics[j].TopicId);
						}

					 }
				
			 }
			  
			  
			  
		  } 
	   }


		
		
		for(var q=0; q<appdata.ReflectionQuestions.length; q++) {
			$("#passport-qlist").append("<li>"+appdata.ReflectionQuestions[q]+"</li>");
		}

		totalrows = Math.ceil(appdata.PassportItems.length / 3);
		for(var r=0; r<totalrows; r++) {
			$("#passport-ilist").append('<div class="row passport-row" id="row'+r+'"></div>');
		}

		for(var i=0; i<appdata.PassportItems.length; i++) {

			if(i !== 0 && (i % 3 === 0)) {
				currentrow += 1;
			}

			var newitem = '<div class="passport-item col-lg-4" id="pi'+i+'">';
			newitem += '<div class="card ovf-hidden">';
			newitem += '<div class="view overlay hm-white-slight"';
			for(var c=0; c<appdata.PassportTiers.length; c++) {
				if(appdata.PassportItems[i].Tier === appdata.PassportTiers[c].ID) {
					newitem += ' style="background-color:'+appdata.PassportTiers[c].Color+'"';
				}
			}

			newitem += '><div class="avatar flex-center"><img src="'+appdata.PassportItems[i].IconFile+'" class="rounded-circle img-fluid" alt=""></div>';
			newitem += '<a><div class="mask waves-effect waves-light"></div></a></div>';
			newitem += '<div class="card-block">';
			newitem += '<a class="activator" onClick="reflectOpen('+i+')"><i class="fa fa-edit cyan-text"></i></a>';
			newitem += '<h4 class="card-title">'+appdata.PassportItems[i].Title+'</h4><hr>';
			newitem += '<p class="card-text">'+appdata.PassportItems[i].Description+'</p>';
			if(appdata.PassportItems[i].Links.length > 0) {
				newitem += '<ul class="fa-ul">';
				for(var l=0; l<appdata.PassportItems[i].Links.length; l++) {
					newitem += '<li><a href="'+appdata.PassportItems[i].Links[l].URL+'" target="_blank">'+appdata.PassportItems[i].Links[l].Text+' '+appdata.PassportItems[i].Links[l].IconHTML+'</a></li>';
				}
				newitem += '</ul>';
			}
			newitem += '<div class="btn-submit"><a class="btn btn-blue-grey" id="submit'+i+'">Submit for Marking</a></div>';
			newitem += '</div>';
			//newitem += '<div class="card-reveal"><div class="content text-center"><h5 class="card-title"><i class="fa fa-close pull-right"></i></h5><div class="clearfix"></div>';
			//newitem += '<div class="md-form" name="input'+i+'" id="input'+i+'" action="post"> <i class="fa fa-pencil prefix"></i><textarea type="text" id="reflect'+i+'" name="reflect'+i+'" class="md-textarea" ></textarea><label for="reflect'+i+'">Share your experience</label></div>';
			//newitem += '<button type="submit" id="reflect'+i+'save" class="btn btn-blue-grey small-two pull-right" data-toggle="tab"><strong>Save Draft</strong></button>';
			//newitem += '</div></div>';
			newitem += '</div>';
			newitem += '</div>';
			$("#passport-ilist #row"+currentrow).append(newitem);

		}

		setTimeout(function(){
			$(".passport-row").each(function() {
				var maxheight = 0;

				$(this).find(".card-block").each(function() {
					var thisheight = $(this).height();
					if(thisheight > maxheight) {
						maxheight = thisheight;
					}

				});

				//console.log(maxheight);
				$(this).find(".card-block").each(function() {
					$(this).height(maxheight+"px");
					//console.log($(this).html());
				});

			});
		}, 1000);

	}
}

var docheight;
var itemoffset;
var modalheight;
var currentindex;

function reflectOpen(index) {
	
	currentindex = index;
	
	$('#myReflection .modal-dialog').css({
		"margin-top":"20px"
	});	
	
	$('#myReflectionLabel').html('My Reflection: '+appdata.PassportItems[index].Title);
	$('#myReflection .modal-body').html('');
	
	for(var q=0; q<appdata.ReflectionQuestions.length; q++) {
		$('#myReflection .modal-body').append('<div class="md-form" name="input'+q+'" id="input'+q+'" action="post"> <i class="fa fa-pencil prefix"></i><textarea type="text" id="reflect'+q+'" name="reflect'+q+'" class="md-textarea" ></textarea><label for="reflect'+q+'">'+appdata.ReflectionQuestions[q]+'</label></div>');
	}
	
	for(var r=0; r<myVal.PassportReflections.length; r++) {
		if(myVal.PassportReflections[r].ItemID == appdata.PassportItems[currentindex].ID) {	
			for(var i=0; i<myVal.PassportReflections[r].Reflections.length; i++) {
				$('#reflect'+i).val(myVal.PassportReflections[r].Reflections[i].ResponseText);
				$('#reflect'+i).parent().find('i').addClass('active');
				$('#reflect'+i).parent().find('label').addClass('active');
			}
		}
	}	
	
	$('#myReflection').modal('show');
	
	docheight = $(document).outerHeight(true);
	console.log(docheight);
	
	itemoffset = $('#pi'+index).offset().top;
	console.log(itemoffset);
	
	$('#myReflection #savereflection').unbind('click');
	$('#myReflection #savereflection').on('click',function() {
		
		var reflections = [];
		var reflectionhtml = '';
		for(var r=0; r<appdata.ReflectionQuestions.length; r++) {
			reflectionhtml += '<p id="reflect'+r+'">'+$('#reflect'+r).val()+'</p>';
			var reflectionobj = {
				"QuestionText":appdata.ReflectionQuestions[r],
				"ResponseText":$('#reflect'+r).val()
			}
			reflections.push(reflectionobj);
		}
		
		var passportobj = {
			"ItemID":appdata.PassportItems[currentindex].ID,
			"ItemTitle":appdata.PassportItems[currentindex].Title,
			"Reflections":reflections
		}
		
		var reflectionindex = -1;
		for(var r=0; r<myVal.PassportReflections.length; r++) {
			if(myVal.PassportReflections[r].ItemID == appdata.PassportItems[currentindex].ID) {
				reflectionindex = r;
			}
		}
		
		if(reflectionindex !== -1) {
			myVal.PassportReflections[reflectionindex] = passportobj;
		}
		else {
			myVal.PassportReflections.push(passportobj);
		}
		
		$('#myReflection').modal('toggle');
		
		//updatepassportData();
		
		var newpost;
		var updatepost;		
		
         newpost = {
            "ParentPostId": null,
            "Subject": CSVal.user.FirstName+" "+CSVal.user.LastName+"'s Reflection",
            "Message": {
               "Content": reflectionhtml,
               "Type": "Html"
            },
            "IsAnonymous": false
         }

         updatepost = {
            "Subject": CSVal.user.FirstName+" "+CSVal.user.LastName+"'s Reflection",
            "Message": {
               "Content": reflectionhtml,
               "Type": "Html"
            },
         }
		 
		 
		 var existingPostNum = -1;
		console.log(forumindex);
		 for(var t=0; t<CSVal.disc.Forums[forumindex].Topics.length; t++) {
			 if(CSVal.disc.Forums[forumindex].Topics[t].Name == appdata.PassportItems[currentindex].Title) {
				 
				 DiscussTopID = CSVal.disc.Forums[forumindex].Topics[t].TopicId;
				 
				 if(CSVal.disc.Forums[forumindex].Topics[t].Posts.length > 0) {
					 existingPostNum = CSVal.discu.Forums[forumindex].Topics[t].Posts[0].PostId;
				 }
			 }
		 }

		console.log(DiscussForID);
		console.log(DiscussTopID);
		console.log(existingPostNum);
		console.log(updatepost);

         if (existingPostNum > -1) {
            CSVal.update_post(DiscussForID, DiscussTopID, existingPostNum, updatepost);
         } else {
            CSVal.post_post(DiscussForID, DiscussTopID, newpost);
         }	

		
	})
	
}

$('#myReflection').on('shown.bs.modal', function (e) {
	
	modalheight = $('#myReflection .modal-dialog').outerHeight(true);
	console.log(modalheight);
	
	if(modalheight < (docheight - itemoffset)) {
		$('#myReflection .modal-dialog').animate({
			"margin-top":itemoffset+"px"
		});
	}
	else {
		$('#myReflection .modal-dialog').animate({
			"margin-top":(docheight - modalheight)+"px"
		});
	}

	
});






pubsubz.subscribe('csval/get_users', function () {
	getUserDataDone = true;
	passInit();

});


pubsubz.subscribe('csval/get_demographics_all', function () {
	var results = CSVal.demographics.get_all;
	if (CSVal.demographics.get_all.PagingInfo.HasMoreItems === true) {
		demographicAllIndex = CSVal.demographics.get_all.PagingInfo.Bookmark++;
		CSVal.get_demographics_all(demographicAllIndex);
	} else {
		getDemoDataDone = true;
			passInit();
	}
});


pubsubz.subscribe('csval/get_topics', function() {
	getDiscussionDataDone = true;
	passInit();
});


pubsubz.subscribe('csval/get_whoami', function () {
	myId = CSVal.user.Identifier;
	CSVal.get_demographics_all();
	CSVal.get_users(studentRoleId);
	CSVal.get_user_details(myId);
	pubsubz.subscribe('csval/get_user_details/' + myId, function () {
		getUserDetailsDone = true;
		passInit();
	});
	
   if (DiscTitle.length > 0) {
      CSVal.get_forums();
   }

});
