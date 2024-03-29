import fetch from 'isomorphic-unfetch';

type Config = {
    url: string,
    sessionKey?: string,
    debug?: boolean,
}

export type Success = {
    success: string,
}

/**
 * @param [offset] Return results starting from this index position
 * @param [limit] Maximum number of results to return
 */
export type Pagination = {
    offset?: number,
    limit?: number,
}

export type BinaryBoolean = 0 | 1;

export type UID = string | number;

export abstract class Base {
    sessionKey: string;
    url: string;
    version: string = '6.3.0';// default to latest version
    debug: boolean;

    constructor(config: Config) {
        this.sessionKey = config.sessionKey || null;
        this.url = config.url;
        this.debug = config.debug || false;
    }

    protected request<T> (endpoint: string): Promise<T> {
        let url = this.url + "/server/json.server.php?action=" + endpoint + "&version=" + this.version;

        if (this.debug) {
            console.debug(
                "javascript-ampache query URL %c" + url,
                "color: black; font-style: italic; background-color: orange;padding: 2px"
            );
        }

        return fetch(url, {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.sessionKey
            }
        }).then(r => {
            if (r.ok) {
                return r.json();
            }
            throw new Error(r.statusText);
        })
    }

    protected binary<T> (endpoint: string): Promise<Blob> {
        let url = this.url + "/server/json.server.php?action=" + endpoint + "&version=" + this.version;

        if (this.debug) {
            console.debug(
                "javascript-ampache query URL %c" + url,
                "color: black; font-style: italic; background-color: orange;padding: 2px"
            );
        }

        return fetch(url,{
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.sessionKey
            }
        })
            .then(response => response.blob())
            .then(r => {
                return r;
            })
    }

    public setSessionKey(sessionKey: string) {
        this.sessionKey = sessionKey;
    }
}