=== TS Geo Location ===
Contributors: TechSolitaire
Tags: geo, geolocation, geo location, address, city, state, country, location
Requires at least: 4.6
Tested up to: 4.9.2
Stable tag: 4.9.2
Requires PHP: 5.2.4
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

This plugin detects your location and makes certain classes available to you which you can apply to the div elements or use shortcodes in your theme to display the user's current locality, city, state, country and address.

== Description ==

This plugin detects your location and makes certain classes available to you which you can apply to the div elements or use shortcodes in your theme to display the user's current locality, city, state, country and address.
Use :
1- Class name 'ts-locality' for locality
2- Class name 'ts-city' for city
3- Class name 'ts-state' for state
4- Class name 'ts-country' for country
5- Class name 'ts-address' for address

You can also add the below shortcodes in your posts or pages content from WordPress Dashboard for locality, city, state, country and address respectively:
1- [ts_geo_locality] for locality
2- [ts_geo_city] for city
3- [ts_geo_state] for state
4- [ts_geo_country] for country
5- [ts_geo_address] for address

== Installation ==

This section describes how to install the plugin and get it working.

1. Upload the plugin files to the `/wp-content/plugins/plugin-name` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress
3. Add the following classes to the div elements in your theme to display the user's current locality, city, state, country and address respectively.
	a- Class name 'ts-locality' for locality
	b- Class name 'ts-city' for city
	c- Class name 'ts-state' for state
	d- Class name 'ts-country' for country
	e- Class name 'ts-address' for address
You can also add the below shortcodes in your posts or pages content from WordPress Dashboard for locality, city, state, country and address respectively:
a- [ts_geo_locality] for locality
b- [ts_geo_city] for city
c- [ts_geo_state] for state
d- [ts_geo_country] for country
e- [ts_geo_address] for address

5. You can get locationObjResult obj available inside request.done() in main.js which you can use to access the location data.

== Frequently Asked Questions ==

= I am not getting any values for locality/city/state/country/address after applying the classes.

Step 1. Check if your Plugin is activated.
Step 2. Deactivate all plugins and reactivate ts geo location.
Step 3. Refresh the page and wait for a few seconds . This plugin uses ajax request to get the location data. It make take some time for ajax request to complete.
Step 4. You are trying to access the plugin on a non-secure site ( http ). This plugin only works for secure sites ( https ).
Step 5. Open the network tab and look for action: geo_ajax_hook. and troubleshoot.
Step 6. Condition is applied inside custom-functions.php to include the main.js file only on front page.Change the condition.

= I am having issues with the other content on my site.
Step 1. Check if your Plugin is activated.
Step 2. Deactivate all plugins and reactivate ihs geo location.
Step 3. Recheck the classname or shortcode you are using.

== Screenshots ==

1. You can find and display the Locality, City, State, Country and the complete address.