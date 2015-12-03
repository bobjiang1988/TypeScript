//// [typeGuardFunctionOfFormThis.ts]
class RoyalGuard {
    isLeader(): this is LeadGuard {
        return this instanceof LeadGuard;
    }
    isFollower(): this is FollowerGuard {
        return this instanceof FollowerGuard;
    }
}

class LeadGuard extends RoyalGuard {
    lead(): void {};
}

class FollowerGuard extends RoyalGuard {
    follow(): void {};
}

let a: RoyalGuard = new FollowerGuard();
if (a.isLeader()) {
    a.lead();
}
else if (a.isFollower()) {
    a.follow();
}

interface GuardInterface extends RoyalGuard {}

let b: GuardInterface;
if (b.isLeader()) {
    b.lead();
}
else if (b.isFollower()) {
    b.follow();
}

if (((a.isLeader)())) {
    a.lead();
}
else if (((a).isFollower())) {
    a.follow();
}

if (((a["isLeader"])())) {
    a.lead();
}
else if (((a)["isFollower"]())) {
    a.follow();
}

var holder2 = {a};

if (holder2.a.isLeader()) {
    holder2.a;
}
else {
    holder2.a;
}

class ArrowGuard {
    isElite = (): this is ArrowElite => {
        return this instanceof ArrowElite;
    }
    isMedic = (): this is ArrowMedic => {
        return this instanceof ArrowMedic;
    }
}

class ArrowElite extends ArrowGuard {
    defend(): void {}
}

class ArrowMedic extends ArrowGuard {
    heal(): void {}
}

let guard = new ArrowGuard();
if (guard.isElite()) {
    guard.defend();
}
else if (guard.isMedic()) {
    guard.heal();
}

interface Supplies {
    spoiled: boolean;
}

interface Sundries {
    broken: boolean;
}

interface Crate<T> {
    contents: T;
    volume: number;
    isSupplies(): this is Crate<Supplies>;
    isSundries(): this is Crate<Sundries>;
}

let crate: Crate<{}>;

if (crate.isSundries()) {
    crate.contents.broken = true;
}
else if (crate.isSupplies()) {
    crate.contents.spoiled = true;
}

// Matching guards should be assignable

a.isFollower = b.isFollower;
a.isLeader = b.isLeader;

class MimicGuard {
    isLeader(): this is MimicLeader { return this instanceof MimicLeader; };
    isFollower(): this is MimicFollower { return this instanceof MimicFollower; };
}

class MimicLeader extends MimicGuard {
    lead(): void {}
}

class MimicFollower extends MimicGuard {
    follow(): void {}
}

let mimic = new MimicGuard();

a.isLeader = mimic.isLeader;
a.isFollower = mimic.isFollower;

if (mimic.isFollower()) {
    mimic.follow();
    mimic.isFollower = a.isFollower;
}


//// [typeGuardFunctionOfFormThis.js]
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RoyalGuard = (function () {
    function RoyalGuard() {
    }
    RoyalGuard.prototype.isLeader = function () {
        return this instanceof LeadGuard;
    };
    RoyalGuard.prototype.isFollower = function () {
        return this instanceof FollowerGuard;
    };
    return RoyalGuard;
})();
var LeadGuard = (function (_super) {
    __extends(LeadGuard, _super);
    function LeadGuard() {
        _super.apply(this, arguments);
    }
    LeadGuard.prototype.lead = function () { };
    ;
    return LeadGuard;
})(RoyalGuard);
var FollowerGuard = (function (_super) {
    __extends(FollowerGuard, _super);
    function FollowerGuard() {
        _super.apply(this, arguments);
    }
    FollowerGuard.prototype.follow = function () { };
    ;
    return FollowerGuard;
})(RoyalGuard);
var a = new FollowerGuard();
if (a.isLeader()) {
    a.lead();
}
else if (a.isFollower()) {
    a.follow();
}
var b;
if (b.isLeader()) {
    b.lead();
}
else if (b.isFollower()) {
    b.follow();
}
if (((a.isLeader)())) {
    a.lead();
}
else if (((a).isFollower())) {
    a.follow();
}
if (((a["isLeader"])())) {
    a.lead();
}
else if (((a)["isFollower"]())) {
    a.follow();
}
var holder2 = { a: a };
if (holder2.a.isLeader()) {
    holder2.a;
}
else {
    holder2.a;
}
var ArrowGuard = (function () {
    function ArrowGuard() {
        var _this = this;
        this.isElite = function () {
            return _this instanceof ArrowElite;
        };
        this.isMedic = function () {
            return _this instanceof ArrowMedic;
        };
    }
    return ArrowGuard;
})();
var ArrowElite = (function (_super) {
    __extends(ArrowElite, _super);
    function ArrowElite() {
        _super.apply(this, arguments);
    }
    ArrowElite.prototype.defend = function () { };
    return ArrowElite;
})(ArrowGuard);
var ArrowMedic = (function (_super) {
    __extends(ArrowMedic, _super);
    function ArrowMedic() {
        _super.apply(this, arguments);
    }
    ArrowMedic.prototype.heal = function () { };
    return ArrowMedic;
})(ArrowGuard);
var guard = new ArrowGuard();
if (guard.isElite()) {
    guard.defend();
}
else if (guard.isMedic()) {
    guard.heal();
}
var crate;
if (crate.isSundries()) {
    crate.contents.broken = true;
}
else if (crate.isSupplies()) {
    crate.contents.spoiled = true;
}
// Matching guards should be assignable
a.isFollower = b.isFollower;
a.isLeader = b.isLeader;
var MimicGuard = (function () {
    function MimicGuard() {
    }
    MimicGuard.prototype.isLeader = function () { return this instanceof MimicLeader; };
    ;
    MimicGuard.prototype.isFollower = function () { return this instanceof MimicFollower; };
    ;
    return MimicGuard;
})();
var MimicLeader = (function (_super) {
    __extends(MimicLeader, _super);
    function MimicLeader() {
        _super.apply(this, arguments);
    }
    MimicLeader.prototype.lead = function () { };
    return MimicLeader;
})(MimicGuard);
var MimicFollower = (function (_super) {
    __extends(MimicFollower, _super);
    function MimicFollower() {
        _super.apply(this, arguments);
    }
    MimicFollower.prototype.follow = function () { };
    return MimicFollower;
})(MimicGuard);
var mimic = new MimicGuard();
a.isLeader = mimic.isLeader;
a.isFollower = mimic.isFollower;
if (mimic.isFollower()) {
    mimic.follow();
    mimic.isFollower = a.isFollower;
}


//// [typeGuardFunctionOfFormThis.d.ts]
declare class RoyalGuard {
    isLeader(): this is LeadGuard;
    isFollower(): this is FollowerGuard;
}
declare class LeadGuard extends RoyalGuard {
    lead(): void;
}
declare class FollowerGuard extends RoyalGuard {
    follow(): void;
}
declare let a: RoyalGuard;
interface GuardInterface extends RoyalGuard {
}
declare let b: GuardInterface;
declare var holder2: {
    a: RoyalGuard;
};
declare class ArrowGuard {
    isElite: () => this is ArrowElite;
    isMedic: () => this is ArrowMedic;
}
declare class ArrowElite extends ArrowGuard {
    defend(): void;
}
declare class ArrowMedic extends ArrowGuard {
    heal(): void;
}
declare let guard: ArrowGuard;
interface Supplies {
    spoiled: boolean;
}
interface Sundries {
    broken: boolean;
}
interface Crate<T> {
    contents: T;
    volume: number;
    isSupplies(): this is Crate<Supplies>;
    isSundries(): this is Crate<Sundries>;
}
declare let crate: Crate<{}>;
declare class MimicGuard {
    isLeader(): this is MimicLeader;
    isFollower(): this is MimicFollower;
}
declare class MimicLeader extends MimicGuard {
    lead(): void;
}
declare class MimicFollower extends MimicGuard {
    follow(): void;
}
declare let mimic: MimicGuard;
