
import { Mongo } from 'meteor/mongo';

export const ChatRoom = new Mongo.Collection('chart_room');
export const Setting = new Mongo.Collection('setting');
export const Notification = new Mongo.Collection('notification');
export const Domain = new Mongo.Collection('domain');
export const Message = new Mongo.Collection('message');

export const test = new Mongo.Collection('test');

