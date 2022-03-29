( function ( $ ) {

	var loader = '<div class="ts-loading ts-loaderA ts-geo-hide"></div>',
		body = $( 'body' );
	body.prepend( loader );

	if ( navigator.geolocation ) {
		$( '.ts-loading' ).removeClass( 'ts-geo-hide' );
		navigator.geolocation.getCurrentPosition( tsShowLocation );
	} else {
		console.log( 'Geolocation is not supported by this browser.' );
	}

	/**
	 * Handles ajax request for finding geo location and makes the following classes available to you,
	 * which you can apply to the div elements in your theme when you want to show the value of the location on front end.
	 * Class name 'ts-locality' for locality
	 * Class name 'ts-city' for city
	 * Class name 'ts-state' for state
	 * Class name 'ts-country' for country
	 * Class name 'ts-address' for address
	 *
	 * It stores the location object into localStorage of the browser's cached memory in form of a JSON string,
	 * which can then be parsed using JSON.stringify() and used the way we want to, on ajax request completion.
	 *
	 * @param position
	 */
	function tsShowLocation( position ){
		var latitude = position.coords.latitude,
		    longitude = position.coords.longitude,
			locationObj = {},
			locationObjResult, request;

		request = $.post(
			geodata.ajax_url,
			{
				action:'geo_ajax_hook',
				security: geodata.ajax_nonce,
				latitude: latitude,
				longitude: longitude,
			}, function ( status ) {
				console.log( 'AJAX COMPLETE' );
			});

		request.done( function( response ) {
				console.log( response );
				if ( response ) {
					var addressComponent = response.data.location_data_sent_to_js[1],
						address = response.data.location_data_sent_to_js[0];

					if ( addressComponent ) {
						locationObj = tsGetLocation( addressComponent, address );
						if ( locationObj ) {
							locationObj = JSON.stringify( locationObj );
							localStorage.setItem( 'ts_location-object', locationObj );
							locationObjResult = JSON.parse( localStorage.getItem( 'ts_location-object' ) );
							// console.log( locationObjResult );
							tsAppendLocationValToDom( locationObjResult )
						}
					} else {
						locationObjResult = JSON.parse( localStorage.getItem( 'ts_location-object' ) );
						if ( locationObjResult ) {
							tsAppendLocationValToDom( locationObjResult );
						}
					}
				}
			$( '.ts-loading' ).addClass( 'ts-geo-hide' );
		});

	}

	/**
	 * Find and return the the object containing locality, city, country, state and address.
	 * 
	 * @param addressComponent
	 * @param address
	 * @return {obj} locationObj Returns the object containing locality, city, country, state and address.
	 */
	function tsGetLocation( addressComponent, address ) {

		var locality,
			city = '',
			state = '',
			country = '',
			locationObj = {};

		for ( var i = 0; i < addressComponent.length; i++ ) {

			if ( 'locality' === addressComponent[i].types[0] ) {
				locality = addressComponent[i].long_name;
			}

			if ( 'administrative_area_level_2' === addressComponent[i].types[0]) {
				city = addressComponent[i].long_name;
			}
			if ( 'administrative_area_level_1' === addressComponent[i].types[0] ) {
				state = addressComponent[i].long_name;
			}
			if ( 'country' === addressComponent[i].types[0] ) {
				country = addressComponent[i].long_name;
			}
		}

		if ( country ) {
			locationObj = {
				'locality': locality,
				'city': city,
				'state': state,
				'country': country,
				'address': address
			};
		}
		return locationObj;
	}

	/**
	 * Appends the locality, city, state, country and address to DOM.
	 *
	 * @param {obj} locationObjResult Obj containing locality, city, state, country and address values.
	 */
	function tsAppendLocationValToDom( locationObjResult ) {
		$( '.ts-locality' ).html( locationObjResult.locality );
		$( '.ts-city' ).html( locationObjResult.city );
		$( '.ts-state' ).html( locationObjResult.state );
		$( '.ts-country' ).html( locationObjResult.country );
		$( '.ts-address' ).html( locationObjResult.address );
	}
	// Call the below method to get the location object containg locality, city, state, country and address
	// console.log( JSON.parse( localStorage.getItem( 'ts_location-object' ) ) );

})( jQuery );
