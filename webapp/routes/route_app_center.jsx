// Copyright (c) 2016 Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import * as RouteUtils from 'routes/route_utils.jsx';

import {preNeedsTeam} from 'routes/route_team.jsx';

export default {
    path: ':team/app-center',
    getComponents: (location, callback) => {
        System.import('components/app_center/app_center_controller.jsx').then(RouteUtils.importComponentSuccess(callback));
    },
    onEnter: preNeedsTeam,
    getChildRoutes: RouteUtils.createGetChildComponentsFunction(
        [
            {
                path: ':name',
                getComponents: (location, callback) => {
                    System.import('components/app_center/app_view_controller.jsx').then(RouteUtils.importComponentSuccess(callback));
                }
            }
        ]
    )
};
