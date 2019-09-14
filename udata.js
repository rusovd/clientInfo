const udata = async () => {
  const data = {
    timeOpened: new Date(),
    // timezone: (new Date()).getTimezoneOffset() / 60,
    // location: window.location,
    // host: window.location.host,
    // hostname: window.location.hostname,
    // pageOn: window.location.pathname,
    // referrer: document.referrer,
    // previousSites: history.length,
    // browserName: navigator.appName,
    // browserEngine: navigator.product,
    // browserVersion1a: navigator.appVersion,
    // browserVersion1b: navigator.userAgent,
    // browserLanguage: navigator.language,
    // browserOnline: navigator.onLine,
    // browserPlatform: navigator.platform,
    // javaEnabled: navigator.javaEnabled(),
    // dataCookiesEnabled: navigator.cookieEnabled,
    // dataCookies1: document.cookie,
    // dataCookies2: decodeURIComponent(document.cookie.split(";")),
    // dataStorage: localStorage,

    // sizeScreenW: screen.width,
    // sizeScreenH: screen.height,
    // sizeDocW: document.width,
    // sizeDocH: document.height,
    // sizeInW: innerWidth,
    // sizeInH: innerHeight,
    // sizeAvailW: screen.availWidth,
    // sizeAvailH: screen.availHeight,
    // scrColorDepth: screen.colorDepth,
    // scrPixelDepth: screen.pixelDepth,
  }
  function getCurrentPosition(options = {}) {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }

  const fetchCoordinates = async () => {
    try {
      const { coords } = await getCurrentPosition();
      data.geo = coords;
      console.log('---> ', data)
      return data
    } catch (error) {
      console.error(error);
      data.geo = {"error": error};
      return data
    }
  };

  return await fetchCoordinates().coords;
}

