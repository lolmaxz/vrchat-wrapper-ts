import { VRChatAPI } from "../VRChatAPI";
import { ApiPaths } from "../types/ApiPaths";
import { BaseApi } from "./BaseApi";

/**
 * This class is used to make requests to the Notifications API.
 */
export class NotificationsApi extends BaseApi {
    baseClass: VRChatAPI;

    constructor(baseClass: VRChatAPI) {
        super(baseClass);
        this.baseClass = baseClass;
    }


    /**
     * Retrieve all of the current user's notifications.
     */
    public async listNotifications({
        type,
        n,
        after,
        offset,
        hidden
    }: VRCAPI.Notifications.Requests.ListNotificationsRequest): Promise<VRCAPI.Notifications.Models.Notification[]> {

        const parameters: URLSearchParams = new URLSearchParams();

        if (n) {
            if (n > 100 || n < 1) throw new Error('Quantity must be between 1 and 100!');
            parameters.append('n', n.toString());
        }

        if (offset) {
            if (offset < 0) throw new Error('Offset must be greater than 0!');
            parameters.append('offset', offset.toString());
        }

        if (after) {
            parameters.append('after', after);
        }

        if (hidden) {
            parameters.append('hidden', hidden.toString());
        }

        parameters.append('type', type);

        const paramRequest: VRCAPI.Generics.executeRequestType = {
            currentRequest: ApiPaths.notifications.listNotifications,
            pathFormated: ApiPaths.notifications.listNotifications.path,
            queryOptions: parameters,
        };

        return await this.executeRequest<VRCAPI.Notifications.Models.Notification[]>(paramRequest);
    }

    /**
     * Accept a friend request by notification `frq_` ID. Friend requests can be found using the NotificationsAPI `listNotifications` by filtering of type `friendRequest`. // todo to recheck
     */
    public async acceptFriendRequest({
        notificationId
    }: VRCAPI.Notifications.Requests.AcceptFriendRequestRequest): Promise<VRCAPI.Generics.RequestSuccess> {

        const paramRequest: VRCAPI.Generics.executeRequestType = {
            currentRequest: ApiPaths.notifications.acceptFriendRequest,
            pathFormated: ApiPaths.notifications.acceptFriendRequest.path.replace('{notificationId}', notificationId),
        };

        return await this.executeRequest<VRCAPI.Generics.RequestSuccess>(paramRequest);
    }

    /**
     * Mark a notification as seen.
     */
    public async markNotificationAsRead({
        notificationId
    }: VRCAPI.Notifications.Requests.MarkNotificationAsReadRequest): Promise<VRCAPI.Notifications.Models.Notification> {

        const paramRequest: VRCAPI.Generics.executeRequestType = {
            currentRequest: ApiPaths.notifications.markNotificationAsRead,
            pathFormated: ApiPaths.notifications.markNotificationAsRead.path.replace('{notificationId}', notificationId),
        };

        return await this.executeRequest<VRCAPI.Notifications.Models.Notification>(paramRequest);
    }

    /**
     * Delete a notification.
     */
    public async deleteNotification({
        notificationId
    }: VRCAPI.Notifications.Requests.DeleteNotificationRequest): Promise<VRCAPI.Notifications.Models.Notification> {

        const paramRequest: VRCAPI.Generics.executeRequestType = {
            currentRequest: ApiPaths.notifications.deleteNotification,
            pathFormated: ApiPaths.notifications.deleteNotification.path.replace('{notificationId}', notificationId),
        };

        return await this.executeRequest<VRCAPI.Notifications.Models.Notification>(paramRequest);
    }

    /**
     * Clear **all** notifications.
     */
    public async clearAllNotifications(): Promise<VRCAPI.Generics.RequestSuccess> {

        const paramRequest: VRCAPI.Generics.executeRequestType = {
            currentRequest: ApiPaths.notifications.clearAllNotifications,
            pathFormated: ApiPaths.notifications.clearAllNotifications.path,
        };

        return await this.executeRequest<VRCAPI.Generics.RequestSuccess>(paramRequest);
    }
}