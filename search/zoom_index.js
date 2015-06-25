dictwords = ["esb 0 30 200 1 14 64 2 14 64 3 14 64 4 14 64 5 14 64 6 14 64 7 14 64 8 14 64 9 14 64 10 14 64 11 14 64 12 14 64 13 14 64",
	"messages 0 19 136",
	"view 0 10 4",
	"shipping 0 10 4",
	"details 0 10 4",
	"maybe 0 10 4",
	"one 0 10 4 4 10 16",
	"day 0 10 4",
	"this 0 10 4 4 12 32 6 10 4",
	"web 0 10 4",
	"app 0 10 2",
	"will 0 10 2",
	"work. 0 10 2",
	"audit 0 14 64 1 14 64 2 14 64 3 14 64 4 14 64 5 14 64 6 14 64 7 14 64 8 14 64 9 14 64 10 14 64 11 14 64 12 14 64 13 14 64",
	"design 0 7 64 1 16 72 2 7 64 3 7 64 4 7 64 5 7 64 6 7 64 7 7 64 8 7 64 9 7 64 10 7 64 11 7 64 12 7 64 13 7 64",
	"index.html 0 9 64 1 9 64 2 9 64 3 9 64 4 9 64 5 9 64 6 9 64 7 9 64 8 9 64 9 9 64 10 9 64 11 9 64 12 9 64 13 9 64",
	"attachments 0 10 64",
	"index 0 11 64",
	"esb_audit 1 10 8",
	"id 1 10 64",
	"javascript 2 10 1",
	"language 2 10 64",
	"search 3 19 64 4 48 236 5 10 64",
	"site 4 12 16",
	"enter 4 10 16",
	"more 4 10 16",
	"keywords 4 10 8",
	"using 4 10 8",
	"zoom 4 17 132",
	"engine 4 10 4",
	"note 4 10 4",
	"wildcards 4 10 2",
	"supported 4 10 2",
	"example 4 9 128",
	"template 4 20 192",
	"page 4 9 128",
	"settings 5 11 64",
	"admin 6 18 40",
	"party 6 10 32",
	"everyone 6 10 16",
	"fix 6 10 8",
	"futon 6 10 4",
	"before 6 10 2",
	"proceeding 6 10 1",
	"vendor 6 10 64 7 10 64 8 10 64 9 10 64 10 10 64 11 10 64 12 10 64 13 10 64",
	"couchapp 6 11 64 7 11 64 8 11 64 9 11 64 10 11 64 11 11 64 12 11 64 13 11 64",
	"evently 6 12 64 7 12 64 8 12 64 9 12 64 10 12 64 11 12 64 12 12 64 13 12 64",
	"account 6 13 64 7 13 64 8 13 64 9 13 64 10 13 64",
	"adminparty 6 14 64",
	"mustache 6 15 64 7 15 64 8 15 64 9 15 64 10 15 64 11 15 64 12 15 64 13 15 64",
	"welcome 7 10 16",
	"name 7 10 8 9 10 32 10 10 32 12 10 32",
	"logout 7 10 8",
	"loggedin 7 14 64",
	"signup 8 10 16 9 10 32",
	"login 8 10 16 10 10 32",
	"loggedout 8 14 64 11 14 64",
	"password 9 10 32 10 10 32",
	"loginform 9 14 64",
	"signupform 10 14 64",
	"please 11 10 32 12 10 32",
	"log 11 10 16",
	"see 11 10 4",
	"your 11 10 2 12 10 16",
	"profile 11 20 65 12 20 72 13 13 64",
	"hello 12 10 64 13 10 16",
	"setup 12 10 16",
	"user 12 10 16",
	"nickname 12 10 8 13 18 16",
	"email 12 10 4",
	"gravatar 12 10 2",
	"url 12 10 2",
	"noprofile 12 14 64",
	"gravatar_url 13 18 48",
	"profileready 13 14 64"];
skipwords = ["and",
	"or",
	"the",
	"it",
	"is",
	"an",
	"on",
	"we",
	"us",
	"to",
	"of",
	"has",
	"be",
	"all",
	"for",
	"in",
	"as",
	"so",
	"are",
	"that",
	"can",
	"you",
	"at",
	"its",
	"by",
	"have",
	"with",
	"into"];
var STR_FORM_SEARCHFOR = "Search for:";
var STR_FORM_SUBMIT_BUTTON = "Submit";
var STR_FORM_RESULTS_PER_PAGE = "Results per page:";
var STR_FORM_CATEGORY = "Category:";
var STR_FORM_CATEGORY_ALL = "All";
var STR_FORM_MATCH = "Match:";
var STR_FORM_ANY_SEARCH_WORDS = "any search words";
var STR_FORM_ALL_SEARCH_WORDS = "all search words";
var STR_FORM_DATE_FROM = "From:";
var STR_FORM_DATE_TO = "To:";
var STR_FORM_DATE_BUTTON = "&laquo;";
var STR_NO_QUERY = "No search query entered.";
var STR_RESULTS_FOR = "Search results for:";
var STR_RESULTS_IN_ALL_CATEGORIES = "in all categories";
var STR_RESULTS_IN_CATEGORY = "in category";
var STR_POWEREDBY = "Search powered by";
var STR_NO_RESULTS = "No results";
var STR_RESULT = "result";
var STR_RESULTS = "results";
var STR_PHRASE_CONTAINS_COMMON_WORDS = "Your search query contained too many common words to return the entire set of results available. Please try again with a more specific query for better results.";
var STR_SKIPPED_FOLLOWING_WORDS = "The following word(s) are in the skip word list and have been omitted from your search:";
var STR_SKIPPED_PHRASE = "Note that you can not search for exact phrases beginning with a skipped word";
var STR_SUMMARY_NO_RESULTS_FOUND = "No results found.";
var STR_SUMMARY_FOUND_CONTAINING_ALL_TERMS = "found containing all search terms.";
var STR_SUMMARY_FOUND_CONTAINING_SOME_TERMS = "found containing some search terms.";
var STR_SUMMARY_FOUND = "found.";
var STR_PAGES_OF_RESULTS = "pages of results.";
var STR_MORETHAN = "More than";
var STR_POSSIBLY_GET_MORE_RESULTS = "You can possibly get more results searching for";
var STR_ANY_OF_TERMS = "any of the terms";
var STR_ALL_CATS = "all categories";
var STR_CAT_SUMMARY = "Refine your search by category:";
var STR_DIDYOUMEAN = "Did you mean:";
var STR_OR = "or";
var STR_RECOMMENDED = "Recommended links";
var STR_SORTEDBY_RELEVANCE = "Sorted by relevance";
var STR_SORTBY_RELEVANCE = "Sort by relevance";
var STR_SORTBY_DATE = "Sort by date";
var STR_SORTEDBY_DATE = "Sorted by date &#9660;";
var STR_SORTEDBY_DATE_ASC = "Sorted by date &#9650;";
var STR_RESULT_TERMS_MATCHED = "Terms matched: ";
var STR_RESULT_SCORE = "Score: ";
var STR_RESULT_URL = "URL:";
var STR_RESULT_PAGES = "Result Pages:";
var STR_RESULT_PAGES_PREVIOUS = "Previous";
var STR_RESULT_PAGES_NEXT = "Next";
var STR_SEARCH_TOOK = "Search took";
var STR_SECONDS = "seconds";
var STR_MAX_RESULTS = "You have requested more results than served per query. Please try again with a more precise query.";
