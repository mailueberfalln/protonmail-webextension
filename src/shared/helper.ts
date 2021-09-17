export const isFirstPartyIsolation = () => {
    try {
        return (browser as any).privacy.websites.firstPartyIsolate.get({});
    } catch (error) { //catch null access for Chromium
        return false;
    }
};
