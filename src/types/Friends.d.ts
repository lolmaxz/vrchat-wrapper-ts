declare namespace VRCAPI {
    namespace Friends {
        namespace Models {

            type FriendStatus = {
                incomingRequest: boolean;
                isFriend: boolean;
                outgoingRequest: boolean;
                }
        }

        namespace Requests {
            /**
             * List information about friends.
             */
            type ListFriendsRequest = {
                /**
                 * The number of records to return. (Default: 60)
                 */
                n?: number;
                /**
                 * The number of records from the top of the list to offset the results by. (Default: 0)
                 */
                offset?: number;
                /**
                 * Returns only offline users if true, returns only online and active users if false
                 */
                offline?: boolean;
            }
            /**
             * Send a friend request to another user.
             */
            type SendFriendRequest = {
                /**
                 * The user ID of the user to send a friend request to.
                 */
                userId: string;
            }
            /**
             * Deletes an outgoing pending friend request to another user. To delete an incoming friend request, use the `deleteNotification` endpoint instead.
             */
            type DeleteFriendRequest = {
                /**
                 * The user ID of the user to delete the friend request to.
                 */
                userId: string;
            }
            /**
             * Retrieve if the user is currently a friend with a given user, if they have an outgoing friend request, and if they have an incoming friend request.
             * 
             * The proper way to receive and accept friend request is by checking if the user has an incoming `Notification` of type `friendRequest`, and then accepting that notification.
             */
            type CheckFriendStatus = {
                /**
                 * The user ID of the user to check the friend status of.
                 */
                userId: string;
            }
            /**
             * Unfriend a user by ID.
             */
            type Unfriend = {
                /**
                 * The user ID of the user to unfriend.
                 */
                userId: string;
            }
        }
    }
}